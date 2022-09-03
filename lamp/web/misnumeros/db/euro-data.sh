#!/bin/bash

raw_data=temp_data_file.txt
csv_file=data.csv

# Descargando datos en formato CSV
if curl 'http://lotto.merseyworld.com/cgi-bin/lottery?days=20&Machine=Z&Ballset=0&order=1&show=1&year=0&display=CSV' -o $raw_data ; then

# Proceso de limpieza del fichero
# Eliminando las 6 primeras lineas
sed -i '1,7d' $raw_data
# Eliminando las lineas que comienzan con el caracter mayor_que
sed -i '/^</d' $raw_data
# Eliminando lineas en blanco
sed -i '/^$/d' $raw_data
# Eliminando espacios
sed -i 's/[[:space:]]//g' $raw_data
# Reemplazando delimitador
sed -i 's/,/|/g' $raw_data
# Eliminando ultimas 2 lineas y copiando archivo a la ubicaion definitiva
head -n -2 $raw_data > $csv_file
# Eliminando temp file
#rm $raw_data

# Ejecutando python para importar datos a tabla sqlite
if python csv_to_sqlite.py; then echo "CSV to SQL convertion OK!" && rm $csv_file; else echo "CSV to SQL convertion FAILED"; fi

else
    echo "No se ha podido descargar el CSV"
fi

