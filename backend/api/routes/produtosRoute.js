const { Router } = require('express')
const ProdutosController = require('../controllers/ProdutosController')


const router = Router()

router.get('/api/produtos', ProdutosController.read)
router.post('/api/produtos', ProdutosController.create)  
router.delete('/api/produtos/:id', ProdutosController.delete)

module.exports = router