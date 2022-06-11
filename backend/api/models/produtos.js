'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produtos.init({
    nomeProd: DataTypes.STRING,
    validade: DataTypes.DATEONLY,
    preco: DataTypes.DOUBLE,
    valorPromocao: DataTypes.DOUBLE,
    descricao: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Produtos',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Produtos;
};