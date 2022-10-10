'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 await queryInterface.bulkInsert('menus', [{
  nameMenu : 'ice creame',
  image : 'ada',
  category :'dessert',
  description : 'the most popular in jakarta',
  rating :100,
  price : 15000,
  discount : 0,
  createdAt : new Date(),
  updatedAt : new Date()
     }],{});
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('menus', null, {});

  }
};
