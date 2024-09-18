# Repositório voltado para desafio
### Link do desafio [aqui](https://github.com/comigotech/avaliacao-candidatos-fullstack)

## Historia de usuário cumpridas no desafio
### Back-end:
- [x] 1. Nível 1 - Validação
- [x] 2. Nível 2 - Persistência
- [x] 3. Nível 3 - Autenticação
- [x] 4. Nível 4 - Gerenciamento de permissões
- [x] 5. Nível 6 - Infra
### Front-end:
- [x] 1. Nível 1 - Cadastro
- [x] 2. Nível 2 - Conectando na API
- [x] 3. Nível 3 - Listando
- [x] 4. Nível 4 - Autenticação

### Historias de usuário não cumpridas
- [ ] 1. Nível 5 - Testes (Back-end)
- [ ] 2. Nível 7 - Cloud (Back-end)
- [ ] 3. Nível 8 - Monitoramento e Observabilidade (Back-end)
- [ ] 4. Nível 5 - Testes (Front-end)


## Como rodar o projeto
### Back-end
1. Tenha o docker instalado na sua máquina
2. Clone o repositório
3. Entre na pasta `backend-comigo`
4. Execute o comando `yarn install` ou `npm install`
5. Execute o comando `docker-compose up --build` ou `sudo docker-compose up --build`(Caso esteja no Linux), O back-end estará rodando na porta 8000, é necessário rodar em um terminal separado `docker-compose exec app npx prisma generate` e `docker-compose up` novamente.
6. Use Postman ou Insomnia para criar um usuário, a rota é `localhost:8000/api/auth/register` e o corpo da requisição é:
```json
{
    "name":"Seu Nome",
    "email":"Seu Email",
    "password":"Sua_Senha",
    "role":"ADMIN" ou "ATTENDANT"
}
```
### Front-end
1. Clone o repositório
2. Entre na pasta `frontend-comigo`
3. Execute o comando `yarn install` ou `npm install`
4. Execute o comando `yarn start` ou `npm start`, o front-end estará rodando na porta 3000
5. Faça login com o usuário criado no back-end
6. Caso queira dar logout e fazer login com outro usuário, clique no botão de usuário no canto superior direito

### Tecnologias utilizadas
- [x] TypeScript (Ambos)
- [x] Docker (Back-end)
- [x] Node.js (Back-end)
- [x] Express.js (Back-end)
- [x] Postgres (Back-end)
- [x] React.js (Front-end)
- [x] Axios (Front-end)
- [x] Material-UI (Front-end)

### Observações
- O back-end foi feito com base no desafio, porém, não foi feito testes, monitoramento e observabilidade, e cloud.
- O front-end foi feito com base no desafio, porém, não foi feito testes. Além disso, a parte de editar tickets e os filtros, não foram implementados.
