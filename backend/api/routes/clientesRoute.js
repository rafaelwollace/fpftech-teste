const { Router } = require('express')
const ClientesController = require('../controllers/ClientesController')


const router = Router()

router.get('/api/clientes', ClientesController.read)
router.post('/api/clientes', ClientesController.create)  
router.delete('/api/clientes/:id', ClientesController.delete)

module.exports = router