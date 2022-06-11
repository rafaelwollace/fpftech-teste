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
      preco: {
        type: Sequelize.DOUBLE(10,2)
      },
      valorPromocao: {
        type: Sequelize.DOUBLE(10,2)
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