const Services = require('../services/Services')
const produtosServices = new Services('Produtos')


class ProdutosController {

  static async read(req, res) {
    try {
      const read = await produtosServices.read()
      return res.status(200).json(read)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async readOne(req, res) {  
    const { id } = req.params
    try {
      const oneProd = await produtosServices.readOne({ id })
      return res.status(200).json(oneProd)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


  static async create(req, res) {
    const nwProd = req.body
    try {
      const newProd = await produtosServices.create({ 
          nomeProd: req.body.nomeProd, 
          preco: req.body.preco, 
          valorPromocao: req.body.valorPromocao,
          descricao: req.body.descricao 
        })
      return res.status(200).json(newProd)
    } catch (err) {
      return  res.status(500).json({
        message: err.errors.map(e => e.message)
      });
    }
  }

  static async update(req, res) {  
    const { id } = req.params
    const { nomeProd, preco, valorPromocao, descricao }  = req.body
    try {
      await produtosServices.update(
          {nomeProd:nomeProd, preco:preco, valorPromocao:valorPromocao, descricao:descricao}, 
          { id: Number(id) })
      return res.status(200).json({ mensagem: `Produto ID:${id} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


  static async delete(req, res) {
    const { id } = req.params
    try {
      await produtosServices.delete(id)
      return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


}


module.exports = ProdutosController