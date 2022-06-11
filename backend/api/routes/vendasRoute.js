const { Router } = require('express')
const VendasController = require('../controllers/VendasController')


const router = Router()
router
    .get('/api/vendas', VendasController.read)
    .get('/api/vendas/:id', VendasController.readOne)
    .post('/api/vendas', VendasController.create)  
    .delete('/api/vendas/:id', VendasController.delete)
    .put('/api/vendas/:id', VendasController.update)


module.exports = router