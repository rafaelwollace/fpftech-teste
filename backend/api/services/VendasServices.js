const Services = require('./Services')
const database = require('../models')

class VendasServices extends Services {
    constructor() {
        super('Vendas')
        this.clientes = new Services('Clientes')
        this.produtos = new Services('Produtos')
    }

    async read() {
        return database[this.nameModel].findAll({
            include: [
                {
                  model: database.Clientes,
                },
                {
                  model: database.Produtos,
                },
              ],
            order: [
              ["id", "DESC"],
            ],
          });
    }

    async readOne(where = {}) {
      return database[this.nameModel].findOne({   
        include: [
        {
          model: database.Clientes,
        },
        {
          model: database.Produtos,
        },
      ], where: { ...where } })
    }


}

module.exports = VendasServices