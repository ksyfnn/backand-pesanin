'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      orderItem.belongsTo(models.menu,{
        foreignKey :'menuId',
        // targetKey : 'menuId',
        onDelete : 'CASCADE'
      })
      // joint with table order
      orderItem.belongsTo(models.order,{
        foreignKey : 'orderId',
        // targetKey : 'orderId',
        onDelete : 'CASCADE'
      })
    }
  }
  orderItem.init({
    orderId:{
      type : DataTypes.INTEGER,
      references : {
        model : 'order',
        key : 'id'
      }
    },
    menuId:{
      type : DataTypes.INTEGER,
      references : {
        model : 'menu',
        key : 'id'
      }
    },
    qty: DataTypes.INTEGER,
    amount: {
      type : DataTypes.DECIMAL,
      references : {
        model : 'menu',
        key : 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'orderItem',
  });
  return orderItem;
};