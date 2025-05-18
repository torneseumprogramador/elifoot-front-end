# Remova os containers e imagens anteriores
docker-compose down --rmi all

# Reconstrua e inicie
docker-compose up --build