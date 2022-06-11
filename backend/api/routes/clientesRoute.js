const { Router } = require('express')
const ClientesController = require('../controllers/ClientesController')


const router = Router()
router
    .get('/api/clientes', ClientesController.read)
    .get('/api/clientes/:id', ClientesController.readOne)
    .post('/api/clientes', ClientesController.create)  
    .delete('/api/clientes/:id', ClientesController.delete)
    .put('/api/clientes/:id', ClientesController.update)  

module.exports = router