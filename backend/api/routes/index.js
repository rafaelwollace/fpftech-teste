const express = require('express')
const clientes = require('./clientesRoute')
const produtos = require('./produtosRoute')
const vendas = require('./vendasRoute')
const cors = require('cors');

// gerar documentacao
  // app.use('/', clientes);
  // app.use('/', produtos);
  // app.use('/', vendas);
   

module.exports = app => {
  app.use(
    cors(),
    express.json(),
    clientes,
    produtos,
    vendas
  )
}