'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categoryMenu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      categoryMenu.hasMany(models.menu, {
        foreignKey : 'category'
      })
    }
  }
  categoryMenu.init({
    category : DataTypes.STRING,
    image: DataTypes.STRING,
    createdAt : DataTypes.DATE,
    updatedAt : DataTypes.DATE
  }, {
    sequelize,
    modelName: 'categoryMenu',
  });
  return categoryMenu;
};