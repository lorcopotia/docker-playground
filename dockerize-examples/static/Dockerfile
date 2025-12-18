FROM nginx:alpine

# Copiamos el script de arranque y el template (si se quiere)
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80
CMD ["/start.sh"]
