'use strict';

module.exports = (sequelize, DataTypes) => {

  const BillDetail = sequelize.define('BillDetail', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
	  validate: {
        isNumeric: {
          msg: "La cantidad debe ser numeros"
        },
        len: {
          args: [1, 255],
          msg: "La cantidad tiene que ser minimamente de 1 digito"
        }
      }
    },
    quantity_value_total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
	  validate: {
        isNumeric: {
          msg: "El valor debe ser numerico"
        },
        len: {
          args: [1, 255],
          msg: "La cantidad tiene que ser minimamente de 1 digito"
        }
      }
    }	
  }, {
    tableName: "bill-detail"
  });

  BillDetail.associate = function(models) { 
	BillDetail.belongsTo(models.Product, { as: "BillDetailProduct", foreignKey: "product_id" });
	BillDetail.belongsTo(models.Bill, { as: "Bills", foreignKey: "bill_id" });
  };
  return BillDetail;
};