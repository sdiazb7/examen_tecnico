'use strict';

module.exports = (sequelize, DataTypes) => {

  const BillDetail = sequelize.define('BillDetail', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },	
  }, {
    tableName: "bill-detail"
  });



  BillDetail.associate = function(models) { 
	BillDetail.belongsTo(models.Product, { as: "BillDetailProduct", foreignKey: "product_id" });
	BillDetail.belongsTo(models.Bill, { as: "BillDetails", foreignKey: "bill_id" });
  };


  return BillDetail;
};