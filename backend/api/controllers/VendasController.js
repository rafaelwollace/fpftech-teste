const Services = require('../services/Services')
const vendasServices = new Services('Vendas')
const moment = require("moment");


class VendasController {

  static async read(req, res) {
    try {
      const read = await vendasServices.read()
      return res.status(200).json(read)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  
  static async readOne(req, res) {  
    const { id } = req.params
    try {
      const oneCli = await vendasServices.readOne({ id })
      return res.status(200).json(oneCli)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async create(req, res) {
    const nwVend = req.body
    try {
      const newVenda = await vendasServices.create({ 
          fk_clientes: req.body.fk_clientes, 
          fk_produtos: req.body.fk_produtos, 
          quantidade: req.body.quantidade, 
          dataVenda: moment().format("YYYY-MM-DD")
        })
      return res.status(200).json(newVenda)
    } catch (err) {
      return  res.status(500).json({
        message: err.errors.map(e => e.message)
      });
    }
  }

  static async update(req, res) {  
    const { id } = req.params
    const { fk_clientes, fk_produtos, quantidade }  = req.body
    try {
      await vendasServices.update(
          {fk_clientes:fk_clientes, fk_produtos:fk_produtos, quantidade:quantidade}, 
          { id: Number(id) })
      return res.status(200).json({ mensagem: `Venda ID:${id} atualizado` })
    } catch (error) {
      return  res.status(500).json({
        message: err.errors.map(e => e.message)
      });
    }
  }
  

  static async delete(req, res) {
    const { id } = req.params
    try {
      await vendasServices.delete(id)
      return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


}


module.exports = VendasController