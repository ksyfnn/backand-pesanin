'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER
      },
      bill_amount: {
        type: Sequelize.DECIMAL
      },
      paid_amount: {
        type: Sequelize.DECIMAL
      },
      bill_date: {
        type: Sequelize.DATE
      },
      payment_type: {
        type: Sequelize.ENUM,
        values : ['cash', 'non cash']
      },
      payment_date:{
        type : Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('payments');
  }
};