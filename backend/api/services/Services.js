const database = require('../models')

class Services {
    constructor(nameModel) {
        this.nameModel = nameModel
    }

    async read() {
        return database[this.nameModel].findAll()
    }

    async create(data) {
        return database[this.nameModel].create(data)
    }

    async delete(id) {
        return database[this.nameModel].destroy({ where: { id: id } })
    }

    

}


module.exports = Services