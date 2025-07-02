const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// Rotas CRUD para tarefas
router.get('/', tarefaController.getTodas);
router.get('/:id', tarefaController.getPorId);
router.post('/', tarefaController.criar);
router.put('/:id', tarefaController.atualizar);
router.delete('/:id', tarefaController.deletar);

module.exports = router;
