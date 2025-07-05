# 📌 API RESTful de Gerenciamento de Tarefas

Uma API completa para gerenciamento de tarefas (CRUD) desenvolvida com **Node.js**, **Express** e **MySQL**. Ideal para praticar conceitos de backend, integração com banco de dados relacional e documentação com Postman.

---

## 📁 Funcionalidades

- ✅ Criar tarefas (`POST /tasks`)
- 📄 Listar todas as tarefas (`GET /tasks`)
- 🔍 Obter uma tarefa por ID (`GET /tasks/:id`)
- ✏️ Atualizar uma tarefa (`PUT /tasks/:id`)
- ❌ Deletar uma tarefa (`DELETE /tasks/:id`)

---

## 🧰 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MySQL**
- **Sequelize (ou mysql2, se aplicável)**
- **Postman** (para testes e documentação)
- **Dotenv** (variáveis de ambiente)

---

## 🛠️ Instalação

no terminal :
# Clone o repositório
git clone https://github.com/AugustoM1das/CRUD-node.js.git
cd CRUD-node.js

# Instale as dependências
npm install

# Configure o arquivo .env
cp .env.example .env

Preencha o .env com suas credenciais:

DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
DB_PORT=3306

🚀 Rodando a API

# Inicie o servidor
npm start

A API estará disponível em: http://localhost:3000

📬 Exemplos de Requisições (Postman)

A documentação da API pode ser importada diretamente no Postman.
Você pode usar os seguintes endpoints para testar:

GET     /tasks
POST    /tasks
GET     /tasks/:id
PUT     /tasks/:id
DELETE  /tasks/:id

💡 Aprendizados
Este projeto me ajudou a:

Praticar rotas e middlewares com Express

Entender o fluxo completo de uma API RESTful

Integrar Node.js com banco de dados MySQL

Documentar e testar endpoints com Postman

Organizar melhor a estrutura de um projeto backend
