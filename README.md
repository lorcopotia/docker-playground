# Guía paso a paso: Dockerizar una aplicación sencilla (dos variantes)

Objetivo: crear dos imágenes Docker distintas que formen aplicaciones que muestran información del host (hostname, RAM y CPU):

- Variante 1: aplicación estática servida por `nginx` (genera `index.html` al arrancar).
- Variante 2: aplicación con `Flask` (servidor Python que expone la misma información).

Estructura de ejemplo creada en este repositorio:

- `dockerize-examples/static/` — `Dockerfile`, `start.sh` (genera `index.html`), imagen basada en `nginx:alpine`.
- `dockerize-examples/flask/` — `Dockerfile`, `app.py`, `requirements.txt`, imagen basada en `python:3.11-slim`.

Resumen de pasos (aplicable a cualquier app):

1. Elegir una imagen base adecuada (`nginx:alpine` para contenido estático; `python:3.x-slim` para apps Python).
2. Escribir un `Dockerfile` mínimo para copiar la aplicación, instalar dependencias y exponer el puerto.
3. Si la app necesita inicialización en runtime (p. ej. insertar hostname), añadir un script de arranque que reemplace o genere archivos antes de lanzar el servidor.
4. Construir la imagen con `docker build` y probarla con `docker run -p hostPort:containerPort`.
5. (Opcional) Añadir `docker-compose.yml` para orquestar múltiples servicios.

## Ejemplo A — Variante estática (nginx)

Archivos relevantes: `dockerize-examples/static/Dockerfile`, `dockerize-examples/static/start.sh`.

Contenido de `dockerize-examples/static/start.sh`:

```bash
#!/bin/sh
set -e

HOSTNAME=$(hostname)
CPU_COUNT=$(nproc)
MEM_KB=$(grep MemTotal /proc/meminfo | awk '{print $2}' 2>/dev/null || echo 0)
MEM_MB=$((MEM_KB/1024))

cat > /usr/share/nginx/html/index.html <<EOF
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Host info (Static)</title>
</head>
<body>
  <h1>Host information (Static + nginx)</h1>
  <ul>
    <li>Hostname: ${HOSTNAME}</li>
    <li>CPUs: ${CPU_COUNT}</li>
    <li>RAM: ${MEM_MB} MB</li>
  </ul>
</body>
</html>
EOF

# Ejecutar nginx en primer plano
exec nginx -g 'daemon off;'
```


Explicación detallada (línea por línea) de `dockerize-examples/static/Dockerfile`

```dockerfile
FROM nginx:alpine

# Copiamos el script de arranque y el template (si se quiere)
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80
CMD ["/start.sh"]
```

- `FROM nginx:alpine`: especifica la imagen base. `nginx:alpine` es una variante ligera de nginx basada en Alpine Linux, útil para imágenes pequeñas.
- `COPY start.sh /start.sh`: copia el script `start.sh` desde el contexto de build al contenedor en la ruta `/start.sh`.
- `RUN chmod +x /start.sh`: cambia permisos del script para hacerlo ejecutable durante la construcción de la imagen.
- `EXPOSE 80`: documentación interna que declara que el contenedor escuchará en el puerto 80. No publica el puerto en el host por sí mismo, pero es una señal para usuarios y orquestadores.
- `CMD ["/start.sh"]`: instrucción por defecto que se ejecuta cuando el contenedor arranca. Aquí lanzamos el script que genera el `index.html` y luego ejecuta `nginx` en primer plano.

Notas adicionales para la variante `static`:
- El script `start.sh` hace trabajo en tiempo de ejecución (runtime) — esto es intencional para poder insertar datos del host (hostname, /proc/meminfo) en `index.html`. Alternativamente, si la página es totalmente estática, se podría copiar `index.html` en el build y prescindir del script.


Pasos:

- Construir la imagen:

```bash
cd dockerize-examples/static
docker build -t host-info-static .
```

- Ejecutar la imagen:

```bash
docker run --rm -p 8080:80 host-info-static
```

`docker run`: lanza un contenedor a partir de una imagen.
`--rm`: elimina el contenedor automáticamente cuando se detiene (no queda en estado exited).
`-p 8080:80`: publica/vailea el puerto 80 del contenedor en el puerto 8080 del host (hostPort:containerPort). Así accedes desde http://localhost:8080.
`host-info-static`: nombre (tag) de la imagen a ejecutar.

Nota: el contenedor se ejecuta en primer plano; presiona Ctrl+C para detenerlo (o usa otro flag como -d para modo detached).

- Abrir en el navegador: `http://localhost:8080`.

Cómo funciona (resumen): el `Dockerfile` usa `nginx:alpine` como base y copia un script `start.sh`. Al iniciar, `start.sh` consulta `hostname`, `/proc/meminfo` y `nproc` para generar un `index.html` dinámico dentro de `/usr/share/nginx/html` y, finalmente, ejecuta `nginx` en primer plano.


## Ejemplo B — Variante Flask (Python)

Archivos relevantes: `dockerize-examples/flask/Dockerfile`, `dockerize-examples/flask/app.py`, `dockerize-examples/flask/requirements.txt`.

Contenido del fichero `dockerize-examples/flask/app.py`:

```python
from flask import Flask, render_template_string
import socket
import os
import re

app = Flask(__name__)

def get_mem_mb():
    try:
        with open('/proc/meminfo') as f:
            for line in f:
                if line.startswith('MemTotal:'):
                    kb = int(re.search(r"\d+", line).group())
                    return kb // 1024
    except Exception:
        return None

@app.route('/')
def index():
    hostname = socket.gethostname()
    cpus = os.cpu_count()
    mem = get_mem_mb()
    return render_template_string('''<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Host info (Flask)</title>
</head>
<body>
  <h1>Host information (Flask)</h1>
  <ul>
    <li>Hostname: {{ hostname }}</li>
    <li>CPUs: {{ cpus }}</li>
    <li>RAM: {{ mem }} MB</li>
  </ul>
</body>
</html>
''', hostname=hostname, cpus=cpus, mem=mem)
```

Contenido del fichero `dockerize-examples/flask/requirements.txt`:

```
Flask==2.2.5
gunicorn==20.1.0
```

Explicación detallada (línea por línea) de `dockerize-examples/flask/Dockerfile`:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py ./

EXPOSE 5000

CMD ["gunicorn", "-w", "2", "-b", "0.0.0.0:5000", "app:app"]
```

- `FROM python:3.11-slim`: imagen base de Python 3.11 en su variante "slim" (menor tamaño que `python` estándar, incluye lo esencial para ejecutar Python).
- `WORKDIR /app`: establece el directorio de trabajo dentro del contenedor; todas las instrucciones `COPY`, `RUN` posteriores que usan rutas relativas lo harán respecto a `/app`.
- `COPY requirements.txt ./`: copia `requirements.txt` al directorio de trabajo del contenedor.
- `RUN pip install --no-cache-dir -r requirements.txt`: instala las dependencias indicadas sin cachear paquetes en disco dentro de la imagen (`--no-cache-dir`) para mantener la imagen más liviana.
- `COPY app.py ./`: copia el archivo `app.py` en el contenedor.
- `EXPOSE 5000`: declara que el contenedor usará el puerto 5000 — útil para documentación y orquestadores.
- `CMD ["gunicorn", "-w", "2", "-b", "0.0.0.0:5000", "app:app"]`: instrucción por defecto que arranca `gunicorn` con 2 workers, escuchando en todas las interfaces `0.0.0.0` puerto `5000`, y exponiendo la aplicación `app` dentro del módulo `app` (es decir `app:app`).

Pasos:

- Construir la imagen:

```bash
cd dockerize-examples/flask
docker build -t host-info-flask .
```

- Ejecutar la imagen:

```bash
docker run --rm -p 5000:5000 host-info-flask
```

- Abrir en el navegador: `http://localhost:5000`.

Cómo funciona (resumen): el `Dockerfile` parte de `python:3.11-slim`, instala `Flask` y `gunicorn`. La aplicación (`app.py`) lee `/proc/meminfo`, obtiene `os.cpu_count()` y `socket.gethostname()` y devuelve una página HTML renderizada con esos valores. `gunicorn` sirve la app en el puerto 5000.

Comandos útiles adicionales

- Ver imágenes locales:

```bash
docker images | grep host-info
```

- Detener/inspeccionar contenedor:

```bash
docker ps
docker logs <container>
docker inspect <container>
```

Notas y consideraciones

- Seguridad: estas imágenes son para demostración. Para producción, minimiza capas, usa usuarios no root y escanea dependencias.
- Tamaño: `python:slim` es razonable para demos; para reducir tamaño considera `python:alpine` si las dependencias lo permiten (ojo con compatibilidades binarios).


Consideraciones y buenas prácticas explicadas:
- Capas de la imagen: cada instrucción `RUN`, `COPY` o `ADD` crea una nueva capa en la imagen. Agrupa operaciones o ordena `COPY`/`RUN` para aprovechar el cache de Docker: por ejemplo, copiar `requirements.txt` e instalar antes de copiar el resto del código evita reinstalar dependencias si sólo cambia `app.py`.
- Minimizar tamaño: usar variantes `slim` o `alpine` cuando sea posible; eliminar caches y archivos temporales durante el `RUN`.
- Usuario no-root: para producción, añade un usuario sin privilegios y cambia `USER` antes de ejecutar el servidor para mejorar la seguridad.
- Arranque y PID 1: usa `exec` en scripts de arranque o ejecutables que cumplen la función de PID 1 (p.ej. `nginx -g 'daemon off;'`) para manejo correcto de señales y shutdown.


## Ejemplo de `docker-compose.yml` para ambos servicios

Crea un archivo `docker-compose.yml` en la raíz del proyecto (o donde prefieras) con el siguiente contenido:

```yaml
version: "3.8"
services:
    static:                                       # Servicio para la variante estática (nginx)
        build:                                    # Instrucciones de construcción de la imagen
            context: ./dockerize-examples/static  # Ruta al directorio con el Dockerfile y scripts de la variante estática
        image: host-info-static                   # Nombre/tag de la imagen resultante
        container_name: host-info-static          # Nombre fijo para el contenedor (opcional, útil para identificarlo)
        ports:
            - "8080:80"                           # Mapea el puerto 80 del contenedor al 8080 del host (host:container)
        restart: unless-stopped                   # Reinicia el contenedor salvo que se detenga manualmente

    flask:                                        # Servicio para la variante Flask (Python)
        build:                                    # Instrucciones de construcción de la imagen
            context: ./dockerize-examples/flask   # Ruta al directorio con el Dockerfile y archivos de la app Flask
        image: host-info-flask                    # Nombre/tag de la imagen resultante
        container_name: host-info-flask           # Nombre fijo para el contenedor (opcional)
        ports:
            - "5000:5000"                         # Mapea el puerto 5000 del contenedor al 5000 del host
        restart: unless-stopped                   # Reinicia el contenedor salvo que se detenga manualmente
```

### Como usarlo

1. Asegúrate de tener la estructura de carpetas y archivos como se describe arriba.
2. Desde la carpeta donde está el `docker-compose.yml`, ejecuta:

     ```bash
     docker-compose up --build
     ```

     Esto construirá ambas imágenes (si es necesario) y levantará los dos servicios.

3. Accede a las aplicaciones en tu navegador:
     - Variante estática (nginx): [http://localhost:8080](http://localhost:8080)
     - Variante Flask: [http://localhost:5000](http://localhost:5000)

4. Para detener ambos servicios:

     ```bash
     docker-compose down
     ```

### Notas

- Puedes personalizar los nombres de los servicios, puertos o rutas según tus necesidades.
- El flag `--build` fuerza la reconstrucción de las imágenes si cambias algún archivo fuente.

