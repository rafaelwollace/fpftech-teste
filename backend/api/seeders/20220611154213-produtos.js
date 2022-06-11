'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', [
      {
        nomeProd: 'Lava Louça',
        preco: 200,
        valorPromocao: 100,
        descricao: 'Lava louça Brastemp Branca 11kg.'

      },
      {
        nomeProd: 'Fogão',
        preco: 300,
        valorPromocao: 200,
        descricao: 'Fogão 5 bocas Preto de embutir.'

      },
      {
        nomeProd: 'Video Game - PS5',
        preco: 1000,
        valorPromocao: 900,
        descricao: 'PS5 desbloqueado novo com jogos Call of Duty.'

      },
      {
        nomeProd: 'Video Game - XBOX',
        preco: 1200,
        valorPromocao: 1000,
        descricao: 'XBOX desbloqueado novo com jogos Call of Duty.'

      },
      {
        nomeProd: 'MACBOOK AIR',
        preco: 5000,
        valorPromocao: 4000,
        descricao: 'Macbook air M1, com 8gb de memoria e 256gb SDD.'

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
     await queryInterface.bulkDelete('produtos', null, {});
  }
};
