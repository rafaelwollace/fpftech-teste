'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('vendas', [
        {
          fk_clientes: 1,
          fk_produtos: 2,
          quantidade: 300,
          dataVenda: 2022-10-10

        },
        {
          fk_clientes: 2,
          fk_produtos: 3,
          quantidade: 600,
          dataVenda: 2022-10-20

        },
        {
          fk_clientes: 3,
          fk_produtos: 5,
          quantidade: 700,
          dataVenda: 2022-12-12

        },
        {
          fk_clientes: 5,
          fk_produtos: 5,
          quantidade: 50,
          dataVenda: 2021-11-15

        },
        {
          fk_clientes: 1,
          fk_produtos: 1,
          quantidade: 150,
          dataVenda: 2022-11-25

        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('vendas', null, {});
  }
};
