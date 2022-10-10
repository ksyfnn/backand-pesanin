'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [{
      order_type : 'dine in',
      table_no : '4',
      status : '',
      order_date: new Date(),
      createdAt : new Date(),
      updatedAt : new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
await queryInterface.bulkDelete('orders', null, {});
  }
};
