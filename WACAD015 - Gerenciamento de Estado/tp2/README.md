# WA Loja - Context API

**WA Loja** é uma aplicação de e-commerce desenvolvida com **Next.js** e **React**, utilizando a **Context API** para gerenciamento de estado global. A aplicação permite aos usuários:

- Visualizar produtos disponíveis.
- Adicionar produtos à lista de favoritos.
- Realizar login e logout para personalizar a experiência de uso.

Além disso, a aplicação utiliza **React Query** para interações assíncronas com uma API simulada via **JSON Server**.

## Funcionalidades Principais

- Listagem de produtos com preços e descontos.
- Gerenciamento de favoritos globalmente com Context API e React Query.
- Autenticação de usuários (login/logout) com persistência via LocalStorage.
- Interface responsiva e amigável, estilizada com Bootstrap.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- Node.js (v20 ou superior)

## Como Instalar

Instale as dependências:

```bash
npm install
```

## Scripts Disponíveis

### Desenvolvimento e Produção

- `npm run dev` : Inicia o servidor de desenvolvimento.
- `npm run build` : Compila o projeto para produção.
- `npm start` : Inicia o servidor de produção após o build.
- `npm run lint` : Verifica o código com o linter configurado.
- `npm run format`: Formata automaticamente os arquivos TypeScript (.ts, .tsx) usando o Prettier.

### Simulação de API

- `npm run json-server` : Inicia o JSON Server na porta 3001.

## Como Executar

1. Inicie o **JSON Server** (simulação da API):

   ```bash
   npm run json-server
   ```

   O servidor estará disponível em [http://localhost:3001](http://localhost:3001).

2. Em outro terminal, inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- `src/app/` :
- Contém as páginas principais do Next.js.
- Páginas importantes: `page.tsx` (listagem de produtos), `favoritos/page.tsx` (lista de favoritos) e `login/page.tsx` (autenticação).
- `src/app/components/` :
- Componentes reutilizáveis, como `Navbar`, `CardProduto`, e `ItemFavorito`.
- `src/app/auth/` :
- Lógica de autenticação com o AuthProvider .
- `src/app/components/FavoritosProvider/` :
- Gerenciamento de favoritos usando React Query e Context API.
- `db.json` :
- Arquivo utilizado pelo JSON Server para simular o backend.

## Demonstração

### Tela Inicial

- Exibe os produtos disponíveis com descontos aplicados.

### Favoritos

- Permite adicionar ou remover produtos à lista de favoritos. Os dados são persistidos usando React Query e JSON Server.

### Login

- Realiza a autenticação do usuário, exibindo informações personalizadas na Navbar.

## Agradecimentos

Agradeço a professora **Júlia** pela orientação e conteúdos apresentados durante o desenvolvimento deste projeto.
