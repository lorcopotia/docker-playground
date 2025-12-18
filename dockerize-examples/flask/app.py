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