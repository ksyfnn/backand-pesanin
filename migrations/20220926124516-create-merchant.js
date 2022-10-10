'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('merchants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      merchant: {
        type: Sequelize.STRING(150)
      },
      adress: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING(150)
      },
      contact: {
        type: Sequelize.INTEGER(13)
      },
      join_date: {
        type: Sequelize.DATE
      },
      link_qr: {
        type: Sequelize.STRING(100)
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      updated_by: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('merchants');
  }
};