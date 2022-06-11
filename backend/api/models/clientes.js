'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Clientes.hasMany(models.Vendas, {
        foreignKey: 'fk_clientes'
      })
    }
  }
  Clientes.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Já existe cadastro com este Nome."
      },
      validate: {
        len: {
          args: [10, 255],
          msg: "Nome com mínimo 10 caracteres"
        }
      }
    },
    dataNascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Campo Data de Nascimento não pode ser vazio.'
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Já existe cadastro com este E-mail."
      },
      validate: {
        isEmail: {
          msg: "Digite um E-mail valido"
        },
        notNull: {
          msg: 'Campo E-mail não pode ser vazio.'
        },
      }
    },
    rg:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: {
        msg: "Já existe cadastro com este RG."
      },
      validate: {
        isInt: {
          args: true,
          msg: 'Campo RG somente números inteiro.'
        },
        notNull: {
          msg: 'Campo RG não pode ser vazio.'
        },
      },
      },
  }, {
    sequelize,
    modelName: 'Clientes',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Clientes;
};