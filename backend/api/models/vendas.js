'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendas.belongsTo(models.Produtos, {
        foreignKey: 'fk_produtos'
      }),
      Vendas.belongsTo(models.Clientes, {
        foreignKey: 'fk_clientes'
      })
    }
  }
  Vendas.init({

    fk_clientes:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Campo Cliente não pode ser nullo.'
        },
        notEmpty: {
          msg:'Campo Cliente não pode ser vazio.'
        }
      },
    },

    fk_produtos:{
      type: DataTypes.INTEGER,
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

    quantidade:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          args: true,
          msg: 'Campo Quantidade somente números inteiro.'
        },
        notNull: {
          msg: 'Campo Quantidade não pode ser nullo.'
        },
        notEmpty: {
          msg:'Campo Quantidade não pode ser vazio.'
        }
      },
    },
    dataVenda: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Vendas',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Vendas;
};