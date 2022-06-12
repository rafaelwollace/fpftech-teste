const Services = require('../services/Services')
const clientesServices = new Services('Clientes')


class ClientesController {

  static async read(req, res) {
    try {
      const read = await clientesServices.read()
      return res.status(200).json(read)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async readOne(req, res) {  
    const { id } = req.params
    try {
      const oneCli = await clientesServices.readOne({ id })
      return res.status(200).json(oneCli)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async create(req, res) {
    const nwCliente = req.body
    try {
      const newCliente = await clientesServices.create({ 
          nome: req.body.nome, 
          dataNascimento: req.body.dataNascimento, 
          email: req.body.email, 
          rg: req.body.rg 
        })
      return res.status(200).json(newCliente)
    } catch (err) {
      return  res.status(500).json({
        message: err.errors.map(e => e.message)
      });
    }
  }


  static async update(req, res) {  
    const { id } = req.params
    const { nome, dataNascimento, email, rg }  = req.body
    try {
      await clientesServices.update(
          {nome:nome, dataNascimento:dataNascimento, email:email, rg:rg}, 
          { id: Number(id) })
      return res.status(200).json({ mensagem: `Cliente ID:${id} atualizado` })
    } catch (error) {
      return  res.status(500).json({
        msg: err.errors.map(e => e.message)
      });
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      await clientesServices.delete(id)
      return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


}


module.exports = ClientesController