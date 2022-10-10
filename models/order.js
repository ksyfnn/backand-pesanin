'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.hasMany(models.orderItem,{
        foreignKey : 'orderId',
        as : 'name'
      })
      order.hasMany(models.payment, {
        foreignKey : 'orderId'
      })
    }
  }
  order.init({
    order_date: {
      type : DataTypes.DATE,
      defaultValue : new Date(),
      allowNull : true
    },
    order_type: {
      type : DataTypes.ENUM,
      values : ['take away', 'dine in']
    },
    table_no: DataTypes.INTEGER,
    status: {
      type : DataTypes.ENUM,
      values : ['new order', 'on proses', 'finish', 'payment']
    },
    createdAt : DataTypes.DATE,
    updatedAt : DataTypes.DATE
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};