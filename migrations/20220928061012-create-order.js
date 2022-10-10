'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_date: {
        type: Sequelize.DATE,
        timestamps : true,
        allowNull : true
      },
      order_type: {
        type: Sequelize.ENUM,
        values : ['dine in', 'take away'],
        allowNull : false
      },
      table_no: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM,
        values : ['new order', 'on proses', 'finish', 'payment'],
        allowNull : true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};