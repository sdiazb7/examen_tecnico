'use strict';

module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('Product', {
    lot_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 255],
          msg: "El nombre tiene que ser minimamente de dos caracters"
        }
      }	  
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
	  validate: {
        isAlpha: {
          msg: "El nombre del producto solo puede contener letras"
        },
        len: {
          args: [2, 255],
          msg: "El nombre tiene que ser minimamente de dos caracters"
        }
      }
    },
    price: {
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
    quantity_available: {
      type: DataTypes.INTEGER,
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
    admission_date: {
      type: DataTypes.DATE,
      allowNull: false,
      },   	
  }, {
    tableName: "products"
  });
  
  Product.associate = function(models) { 
	Product.hasMany(models.BillDetail, { as: "ProductBillDetails", foreignKey: "product_id" });
  }; 
  return Product;
};