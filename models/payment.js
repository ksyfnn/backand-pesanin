'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      payment.belongsTo(models.orderItem,{
        foreignKey : 'orderId'
      })
    }
  }
  payment.init({
    orderId: DataTypes.INTEGER,
    bill_amount: DataTypes.DECIMAL,
    paid_amount: DataTypes.DECIMAL,
    bill_date: {
      type : DataTypes.DATE,
      defaultValue : new Date(),
      allowNull : false
    },
    payment_type: {
      type: DataTypes.ENUM,
      values : ['cash', 'non cash']
    },
    payment_date:{
      type : DataTypes.DATE,
      defaultValue : new Date(),
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'payment'
  });
  return payment;
};