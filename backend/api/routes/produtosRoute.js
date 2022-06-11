const { Router } = require('express')
const ProdutosController = require('../controllers/ProdutosController')


const router = Router()
router
    .get('/api/produtos', ProdutosController.read)
    .get('/api/produtos/:id', ProdutosController.readOne)
    .post('/api/produtos', ProdutosController.create)  
    .delete('/api/produtos/:id', ProdutosController.delete)
    .put('/api/produtos/:id', ProdutosController.update)

module.exports = router