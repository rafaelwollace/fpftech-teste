'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_clientes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Clientes', key: 'id' }
      },
      fk_produtos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Produtos', key: 'id' }
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dataVenda: {
        type: Sequelize.DATEONLY,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vendas');
  }
};