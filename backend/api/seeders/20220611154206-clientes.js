'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('clientes', [
        {
          nome: 'Rafael Cunha',
          dataNascimento: '1988-06-05',
          email: 'rafael.wfc@gmail.com',
          rg: 20337529

        },
        {
          nome: 'Rafaella Cunha',
          dataNascimento: '2021-11-01',
          email: 'rafaellac@gmail.com',
          rg: 2665165

        },
        {
          nome: 'Tayanne Cunha',
          dataNascimento: '1996-12-01',
          email: 'tayanne@gmail.com',
          rg: 8554955

        },
        {
          nome: 'Deyse Cunha',
          dataNascimento: '1985-07-15',
          email: 'deyse@gmail.com',
          rg: 6522169

        },
        {
          nome: 'Janete Cunha',
          dataNascimento: '1975-06-01',
          email: 'janete@gmail.com',
          rg: 5522655

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

     await queryInterface.bulkDelete('clientes', null, {});
  }
};
