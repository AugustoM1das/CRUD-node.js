const express = require('express');
const cors = require('cors');
const tarefaRoutes = require('./routes/tarefaRoutes');

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/tarefas', tarefaRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
