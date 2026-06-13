const express = require('express');
const app = express();
app.use(express.json());

let produtos = [];
let nextId = 1;

// TODO: Implemente o CRUD de produtos em memória:
// POST   /produtos           → 201 + { id, nome, preco }
app.post('/produtos', (req, res) => {
  const { nome, preco } = req.body;

  const produto = {
    id: nextId++,
    nome,
    preco
  };

  produtos.push(produto);
  res.status(201).json(produto);
});

// GET    /produtos           → 200 + array de produtos
app.get('/produtos', (req, res) => {
  res.status(200).json(produtos);
});

// GET    /produtos/:id       → 200 + produto ou 404
app.get('/produtos/:id', (req, res) => {
  const produto = produtos.find(p => p.id === Number(req.params.id));

  if (!produto) {
    return res.sendStatus(404);
  }

  res.status(200).json(produto);
});
// PUT    /produtos/:id       → 200 + produto atualizado ou 404
app.put('/produtos/:id', (req, res) => {
  const produto = produtos.find(p => p.id === Number(req.params.id));

  if (!produto) {
    return res.sendStatus(404);
  }

  produto.nome = req.body.nome;
  produto.preco = req.body.preco;

  res.status(200).json(produto);
});

// DELETE /produtos/:id       → 204 ou 404
app.delete('/produtos/:id', (req, res) => {
  const index = produtos.findIndex(p => p.id === Number(req.params.id));

  if (index === -1) {
    return res.sendStatus(404);
  }

  produtos.splice(index, 1);
  res.sendStatus(204);
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
