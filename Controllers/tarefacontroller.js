const tarefas = [];

exports.getTodas = (req, res) => {
  res.json(tarefas);
};

exports.getPorId = (req, res) => {
  const tarefa = tarefas.find(t => t.id === parseInt(req.params.id));
  if (!tarefa) return res.status(404).send('Tarefa não encontrada');
  res.json(tarefa);
};

exports.criar = (req, res) => {
  const novaTarefa = {
    id: Date.now(),
    titulo: req.body.titulo,
    descricao: req.body.descricao
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
};

exports.atualizar = (req, res) => {
  const tarefa = tarefas.find(t => t.id === parseInt(req.params.id));
  if (!tarefa) return res.status(404).send('Tarefa não encontrada');

  tarefa.titulo = req.body.titulo;
  tarefa.descricao = req.body.descricao;
  res.json(tarefa);
};

exports.deletar = (req, res) => {
  const index = tarefas.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Tarefa não encontrada');

  const deletada = tarefas.splice(index, 1);
  res.json(deletada[0]);
};
