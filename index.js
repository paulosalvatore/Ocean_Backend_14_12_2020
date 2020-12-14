const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// CRUD
// Create, Read (All or Single), Update, Delete
// Criar, Ler (Tudo ou Individual), Atualizar e Remover

const mensagens = [
  'Essa é a primeira mensagem',
  'Essa é a segunda mensagem'
];

// [CREATE] - Criar uma mensagem
app.post('/mensagens', (req, res) => {
  const texto = req.body.texto;

  mensagens.push(texto);

  res.send('Mensagem foi criada com sucesso!');
});

// [READ] All - Ler todas as mensagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens.filter(Boolean));
});

// [UPDATE] - Editar uma mensagem
app.put('/mensagens/:id', (req, res) => {
  const id = +req.params.id - 1;

  const novoTexto = req.body.texto;

  mensagens[id] = novoTexto;

  res.send('Mensagem editada com sucesso!');
});

// [DELETE] - Remover uma mensagem
app.delete('/mensagens/:id', (req, res) => {
  const id = +req.params.id - 1;

  delete mensagens[id];

  res.send('Mensagem foi excluída com sucesso!');
});

app.listen(3000, () => {
  console.info('Servidor rodando em http://localhost:3000.');
});
