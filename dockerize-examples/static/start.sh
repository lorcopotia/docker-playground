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