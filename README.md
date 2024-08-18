# 🛍️ E-commerce Fullstack

## 📋 Índice

1. [Sobre o Projeto](#sobre-o-projeto)
2. [Escopo e Objetivo](#escopo-e-objetivo)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Instalação e Configuração](#instalação-e-configuração)
5. [Execução do Projeto](#execução-do-projeto)
6. [Funcionalidades Implementadas](#funcionalidades-implementadas)
7. [Estrutura do Projeto](#estrutura-do-projeto)
8. [Contribuindo](#contribuindo)
9. [Licença](#licença)

## 📖 Sobre o Projeto

Este projeto é uma API Rest com um frontend integrado para um e-commerce simples. Ele foi desenvolvido como parte do Desafio do Boticário e tem como objetivo fornecer uma aplicação completa, com funcionalidades essenciais como cadastro e login de usuários, gerenciamento de produtos, e mais.

## 🎯 Escopo e Objetivo

O objetivo principal do projeto é criar uma API e um frontend responsivo para um e-commerce, onde os produtos são consumidos por requisição fetch para o backend, usuários possam se registrar, fazer login, adicionar produtos ao carrinho e realizar compras. O projeto segue boas práticas de desenvolvimento e utiliza tecnologias modernas como TypeScript, Node.js, Express, MongoDB e React.

## 🛠️ Tecnologias Utilizadas

### Backend

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para Node.js para construção de APIs.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos dados.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB.
- **JWT (JSON Web Tokens)**: Autenticação e autorização segura.
- **bcrypt.js**: Hashing de senhas para segurança.

### Frontend

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Tipagem estática no frontend.
- **Vite**: Ferramenta de build rápida para projetos web.

## 💻 Instalação e Configuração

### Pré-requisitos

- Node.js (v16 ou superior)
- NPM ou Yarn
- MongoDB

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/vitorwhois/ecommerce-fullstack-react-node.git
   cd nome-do-repositorio
   ```

2. **Instale as dependências do backend:**

   ```cd server
   npm install
   ```

3. **Instale as dependências do frontend:**

   ```cd client
   npm install
   ```

4. **Configuração do arquivo .env:**

   ```JWT_SECRET=segredo.secreto
   MONGO_URI=sua-uri-do-mongodb
   PORT=3001
   ```

## Execução do Projeto

### Executando o Backend

1. **Inicie o servidor backend:**

   ```cd server
   npm run dev
   ```

   O servidor estará rodando em http://localhost:3001.

### Executando o Frontend

1. **Inicie o servidor Frontend:**
   ```cd client
   npm run dev
   ```
   O frontend estará disponível em http://localhost:5173.

## Funcionalidades Implementadas

### Autenticação

- **Registro de usuário**: Criação de um novo usuário com nome, email e senha.
- **Login de usuário**: Autenticação de usuário com email e senha, gerando um token JWT.

### Gerenciamento de Usuários

- **Soft Delete**: Desativação de usuários sem removê-los do banco de dados.
- **Busca de Usuário por ID**: Recupera os dados de um usuário específico (exceto a senha).

### Gerenciamento de Produtos

- **CRUD de Produtos**: Criação, leitura, atualização e remoção de produtos.
- **Importação de Produtos**: Importação de produtos a partir de um arquivo JSON.

### Carrinho de Compras (em construção)

- **Adição e Remoção de Itens no Carrinho**: Gerenciamento do carrinho de compras do usuário.

## Estrutura do Projeto

A estrutura do projeto está organizada conforme as melhores práticas para desenvolvimento fullstack com TypeScript e React:

### Backend (server/)

```bash
    server/
│
├── src/
│   ├── controllers/        # Controladores das rotas
│   ├── middlewares/        # Middlewares de autenticação e validação
│   ├── models/             # Modelos do Mongoose
│   ├── routes/             # Definição das rotas
│   ├── scripts/            # Scripts utilitários (ex.: importação de produtos)
│   ├── utils/              # Funções utilitárias, como tratamento de erros
│   └── app.ts              # Configuração principal do servidor Express
│
├── .env                    # Variáveis de ambiente
└── package.json            # Dependências e scripts
```

### Frontend (client/)

```bash
client/
│
├── src/
│   ├── components/         # Componentes React reutilizáveis
│   ├── pages/              # Páginas principais da aplicação
│   ├── styles/             # Estilos globais e específicos
│   ├── utils/              # Funções e hooks utilitários
│   ├── App.tsx             # Componente raiz da aplicação
│   └── index.tsx           # Arquivo de entrada do React
│
├── .env                    # Variáveis de ambiente
└── package.json            # Dependências e scripts
```

## Rotas do Backend

Aqui estão as principais rotas da API que foram implementadas:

### Autenticação e Usuários

**POST /api/users/register**<br>
Rota para registrar um novo usuário.<br>
Corpo da requisição:

```bash
{
    "name": "Nome do Usuário",
    "email": "email@example.com",
    "password": "senha123"
}
```

**POST /api/users/login**<br>
Rota para realizar o login de um usuário.<br>
Corpo da requisição:

```bash
    {
    "email": "email@example.com",
    "password": "senha123"
    }
```

Resposta:

```bash
    {
    "token": "jwt-token",
    "userId": "id-do-usuario"
}
```

**GET /api/users/**<br>

Rota para buscar um usuário por ID (Requer autenticação).<br>
Cabeçalho:

    Authorization: Bearer {token}

**PATCH /api/users/soft-delete/**<br>

Rota para realizar o soft delete de um usuário por ID (Requer autenticação).<br>
Cabeçalho:

    Authorization: Bearer {token}
