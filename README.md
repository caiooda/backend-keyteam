# REST API em NodeJS (Prisma ORM, Express, SQL SERVER AZURE DB)

## Passos para iniciar:

- npm install


**GENERATE PRISMA:**
- ```npx prisma generate (SE ESTIVER USANDO NPM) ```
- ```yarn prisma generate (SE ESTIVER USANDO YARN) ```
- ```prisma generate (SE ESTIVER USANDO PRISMA CLI) ```


- npm run dev (PORTA http://localhost:8080 )

## Comandos para rodar no Docker:

Stop em Containers: docker rm $(docker ps -a -q) -f

Criar Imagem: docker build -t backend-keyteam .

Rodar Imagem local: docker run -d -p 49160:8080 backend-keyteam (caminho ao rodar: http://localhost:49160)

Rodar Imgem remoto DOCKER HUB: docker run -d -p 49160:8080 caiooda/backend-keyteam 

## APP AZURE:
https://keyteamrestapi.azurewebsites.net/

https://keyteamrestapi.azurewebsites.net/user

https://keyteamrestapi.azurewebsites.net/student

https://keyteamrestapi.azurewebsites.net/teacher

https://keyteamrestapi.azurewebsites.net/course

