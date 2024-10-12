# CRUD Básico em Node.js com Express

Este é um projeto básico de um CRUD (Create, Read, Update, Delete) feito em Node.js utilizando o framework Express.

## Funcionalidades

- **Criar Usuário:** Adiciona um novo usuário à lista com um nome e ID gerado automaticamente.
- **Listar Usuários:** Retorna a lista completa de usuários cadastrados.
- **Atualizar Usuário:** Atualiza o nome de um usuário existente na lista.
- **Deletar Usuário:** Remove um usuário da lista com base em seu ID.

## Tecnologias Utilizadas
- JavaScript
- TypeScript
- Node.js
- Express
- Nodemon (para desenvolvimento)
- Postman (para testes)

## Pré-requisitos

Antes de começar, você precisará ter o Node.js e o NPM instalados na sua máquina. Se você ainda não os tem, você pode baixá-los aqui:
- [Node.js](https://nodejs.org/) (a instalação do Node.js já inclui o NPM)

## Instalação e Configuração

Siga as etapas abaixo para configurar o projeto na sua máquina local:

```bash
# Clone o repositório
git clone git@github.com:matheusdmlopes/crud-node-js.git

# Navegue até a pasta do projeto
cd crud-node-js

# Instale as dependências
npm install

# Inicie o servidor

# JavaScript
npm run dev:js

# TypeScript
npm run dev:ts

```

## Uso

Você pode testar os endpoints utilizando o Postman ou qualquer outra ferramenta para testes de API.

### Endpoints

1. **Criar um novo usuário (POST):**

    - **URL:** `/users`
    - **Body:** 
      ```json
      { "name": "Nome do Usuário" }
      ```
    - **Resposta de sucesso:**
      ```json
      { "message": "Usuário criado com sucesso!", "user": { "id": 1, "name": "Nome do Usuário" } }
      ```

2. **Listar todos os usuários (GET):**

    - **URL:** `/users`
    - **Resposta de sucesso:**
      ```json
      { "message": "Lista de usuários:", "users": [...] }
      ```

3. **Atualizar um usuário (PUT):**

    - **URL:** `/users/:id`
    - **Body:**
      ```json
      { "name": "Novo Nome" }
      ```
    - **Resposta de sucesso:**
      ```json
      { "message": "Usuário de ID :id atualizado!", "name": "Novo Nome" }
      ```

4. **Deletar um usuário (DELETE):**

    - **URL:** `/users/:id`
    - **Resposta de sucesso:**
      ```json
      { "message": "Usuário de ID :id deletado." }
      ```

