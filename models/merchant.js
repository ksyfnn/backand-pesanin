'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  merchant.init({
    merchant: DataTypes.STRING,
    adress: DataTypes.STRING,
    owner: DataTypes.STRING,
    contact: DataTypes.INTEGER,
    join_date: DataTypes.DATE,
    link_qr: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'merchant',
  });
  return merchant;
};