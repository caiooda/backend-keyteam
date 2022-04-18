# REST API em NodeJS (Prisma ORM, Express, SQL SERVER AZURE DB)

## Passos para iniciar:

- npm install
- npm run dev

## Comandos para rodar no Docker:

Stop em Containers: docker rm $(docker ps -a -q) -f

Criar Imagem: docker build -t backend-keyteam .

Rodar Imagem local: docker run -d -p 49160:8080 backend-keyteam (caminho ao rodar: http://localhost:49160)

Rodar Imgem remoto DOCKER HUB: docker run -d -p 49160:8080 caiooda/backend-keyteam 
