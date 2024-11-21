# Módulos WACAD011 e WACAD013

## Instruções

1 - Criar um arquivo .env e preencher conforme o arquivo: <a href="https://github.com/dev-garcia/web-academy-ufam/blob/b71de8f95836c0208427a22bc1d50e54aa8de3ea/WACAD013%20-%20Desenvolvimento%20de%20RESTful%20APIs/ExpAPI/.env.example" title=".env.example">Acessar Arquivo exemplo</a>

2- Executar o banco de dados com `npx prisma db push` ou subir com as migrations (removi as migrations durante a correção da entrega)

3 - Executar os scripts:
`npm run swagger` Gerar documentação Swagger Atualizada.
`npm run seed` Subir os ids de tipos de usuários da aplicação.

4 - Acessar [http://localhost:3000/api] e testar a aplicação.

### Anotações

Analisar o plugin do Insomnia, ele gera dados fakes para cadastrar dados na api.

`npm install joi` validar dados recebidos nas endpoints do back-end, validação se faz tanto no front-end quanto no back-end, no front é importante, pois economiza requisições.
