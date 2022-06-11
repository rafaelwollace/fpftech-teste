'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeProd: {
        type: Sequelize.STRING
      },
      validade: {
        type: Sequelize.DATEONLY
      },
      preco: {
        type: Sequelize.DOUBLE
      },
      valorPromocao: {
        type: Sequelize.DOUBLE
      },
      descricao: {
        type: Sequelize.TEXT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};