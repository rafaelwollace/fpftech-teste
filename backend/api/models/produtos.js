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
      Produtos.hasMany(models.Vendas, {
        foreignKey: 'fk_produtos',
      })
    }
  }
  Produtos.init({

    nomeProd:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Campo Produto não pode ser nullo.'
        },
        notEmpty: {
          msg:'Campo Produto não pode ser vazio.'
        }
      },
    },

    preco:{
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Campo Preço não pode ser nullo.'
        },
        notEmpty: {
          msg:'Campo Preço não pode ser vazio.'
        }
      },
    },

    valorPromocao:{
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Campo Valor Promocional não pode ser nullo.'
        },
        notEmpty: {
          msg:'Campo Valor Promocional não pode ser vazio.'
        }
      },
    },

    descricao:{
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Campo Descrição não pode ser nullo.'
        },
        notEmpty: {
          msg:'Campo Descrição não pode ser vazio.'
        }
      },
    },

  }, {
    sequelize,
    modelName: 'Produtos',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Produtos;
};