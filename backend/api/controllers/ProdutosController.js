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

  static async create(req, res) {
    const nwProd = req.body
    try {
      const newProd = await produtosServices.create({ 
          nomeProd: req.body.nomeProd, 
          validade: req.body.validade, 
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