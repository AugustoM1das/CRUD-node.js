# 📝 API de Gerenciamento de Tarefas

Essa é uma API REST feita com **Node.js**, **Express** e **MySQL**, focada no básico do CRUD para tarefas. O projeto tem como objetivo praticar e aplicar conhecimentos em backend, banco de dados e rotas.

---

## 🔧 Funcionalidades

- Criar novas tarefas
- Listar todas as tarefas
- Buscar uma tarefa pelo ID
- Atualizar dados de uma tarefa
- Deletar uma tarefa

---

## 🛠️ Tecnologias

- Node.js
- Express
- MySQL
- Postman (para testes)
- dotenv (para variáveis de ambiente)

---

## 📦 Como rodar o projeto

1. Clone o repositório:

no terminal :
git clone https://github.com/AugustoM1das/CRUD-node.js.git
cd CRUD-node.js
```

2. Instale as dependências:

no terminal :
npm install
```

3. Crie um arquivo `.env` com suas configs de banco:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
DB_PORT=3306
```

4. Rode o servidor:

no terminal :
npm start
```

A API vai rodar em: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testes com Postman

Você pode testar todos os endpoints com o Postman. Alguns exemplos de rotas:

- `GET /tasks`
- `GET /tasks/:id`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

---

## 💭 O que aprendi

Esse projeto foi importante pra mim porque consegui entender melhor:

- Como funciona uma API REST na prática
- Como conectar o Node.js com MySQL
- Como organizar rotas e middlewares
- Como testar tudo usando o Postman
- Como usar variáveis de ambiente
