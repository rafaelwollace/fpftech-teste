const express = require('express')

const clientes = require('./clientesRoute')
const produtos = require('./produtosRoute')
const cors = require('cors');

// gerar documentacao
  //  app.use('/', clientes);
  //  app.use('/', produtos);
   

module.exports = app => {
  app.use(
    cors(),
    express.json(),
    clientes,
    produtos
  )
}