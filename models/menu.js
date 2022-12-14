'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    menu.belongsTo(models.categoryMenu, {
      foreignKey : 'category'
    })
    }
  }
  menu.init({
    nameMenu: DataTypes.STRING,
    image: DataTypes.STRING,
    category:{
      type : DataTypes.INTEGER,
      references : {
        model : 'categoryMenu',
        key : 'id'
      }
    },
    description: DataTypes.STRING,
    rating: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL,
    createdAt: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updatedAt: DataTypes.DATE,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'menu',
  });
  return menu;
};