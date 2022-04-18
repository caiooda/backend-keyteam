# REST API em NodeJS (Prisma ORM, Express)

Passos para iniciar:

- npm install
- npm run dev


docker rm $(docker ps -a -q) -f

docker build -t backend-key-team .

docker run -p 49160:8080 backend-key-team

docker run -d -p 49160:8080 backend-key-team 

docker run -d -p 49160:8080 caiooda/backend-key-team 

docker login

docker tag backend-key-team caiooda/backend-key-team

docker push caiooda/backend-key-team