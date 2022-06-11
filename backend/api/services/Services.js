const database = require('../models')

class Services {
    constructor(nameModel) {
        this.nameModel = nameModel
    }

    async read() {
        return database[this.nameModel].findAll()
    }

    async readOne(where = {}) {
        return database[this.nameModel].findOne({ where: { ...where } })
      }

    async create(data) {
        return database[this.nameModel].create(data)
    }

    async delete(id) {
        return database[this.nameModel].destroy({ where: { id: id } })
    }

    
  async update(dadosAtualizados, where, transacao = {}){
    return database[this.nameModel]
      .update(dadosAtualizados, { where: { ...where } }, transacao)
  }

}


module.exports = Services