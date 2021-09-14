'use strict';

module.exports = (sequelize, DataTypes) => {

  const Bill = sequelize.define('Bill', {
    
	value_total_bill: {
      type: DataTypes.DECIMAL,
      allowNull: false,
	  validate: {
        isNumeric: {
          msg: "La cantidad debe ser numerica"
        },
        len: {
          args: [1, 255],
          msg: "La cantidad tiene que ser minimamente de 1 digito"
        }
      }
    },
	date_purchase: {
      type: DataTypes.DATE,
      allowNull: false,
	  validate: {
        isNumeric: {
          msg: "La cantidad debe ser numerica"
        },
        len: {
          args: [1, 255],
          msg: "La cantidad tiene que ser minimamente de 1 digito"
        }
      }
    }
  }, {
    tableName: "bills"
  });



  Bill.associate = function(models) { 
	Bill.hasMany(models.BillDetail, { as: "BillDetails", foreignKey: "bill_id" });
  };


  return Bill;
};