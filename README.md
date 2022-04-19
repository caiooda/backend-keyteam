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
https://keyteamwebapi.azurewebsites.net/

https://keyteamwebapi.azurewebsites.net/user

https://keyteamwebapi.azurewebsites.net/student

https://keyteamwebapi.azurewebsites.net/teacher

https://keyteamwebapi.azurewebsites.net/course


## REQUEST AND RESPONSE:

**CRUD ESTÁ FUNCIONANDO PARA TODAS AS ROTAS: /user, /student, /teacher, /course**

ROTA UTILIZADA PARA DOCUMENTAÇÃO CASO API AZURE ESTEJA FORA DO AR

- **GET:** course

<div align="center">
 <img src="https://github.com/caiooda/backend-keyteam/blob/master/img/GET.png" alt="get">
</div>

- **POST:** course

<div align="center">
 <img src="https://github.com/caiooda/backend-keyteam/blob/master/img/POST.png" alt="get">
</div>

- **PUT:** course

<div align="center">
 <img src="https://github.com/caiooda/backend-keyteam/blob/master/img/PUT.png" alt="get">
</div>

- **DELETE:** course

<div align="center">
 <img src="https://github.com/caiooda/backend-keyteam/blob/master/img/DELETE.png" alt="get">
</div>
