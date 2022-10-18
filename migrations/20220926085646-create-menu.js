'use strict';

const { sequelize } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameMenu: {
        type: Sequelize.STRING(150),
        allowNull : false
      },
      image: {
        type: Sequelize.STRING,
        allowNull : false
      },
      category: {
        type: Sequelize.STRING(150),
        allowNull : false
      },
      description: {
        type: Sequelize.STRING,
        allowNull : false
      },
      rating: {
        type: Sequelize.INTEGER(6),
        allowNull : false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull : false
      },
      discount: {
        type: Sequelize.DECIMAL,
        allowNull : false
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull : true
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull : true
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
    await queryInterface.dropTable('menus');
  }
};