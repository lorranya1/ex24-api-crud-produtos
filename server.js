const express = require('express');
const app = express();
app.use(express.json());

let produtos = [];
let nextId = 1;

// TODO: Implemente o CRUD de produtos em memória:
// POST   /produtos           → 201 + { id, nome, preco }
// GET    /produtos           → 200 + array de produtos
// GET    /produtos/:id       → 200 + produto ou 404
// PUT    /produtos/:id       → 200 + produto atualizado ou 404
// DELETE /produtos/:id       → 204 ou 404

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
