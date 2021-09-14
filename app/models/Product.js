'use strict';

module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('Product', {
    lot_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    quantity_available: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    admission_date: {
      type: DataTypes.DATE,
      allowNull: false,
      },   	
  }, {
    tableName: "products"
  });
  
  Product.associate = function(models) { 
	Product.belongsToMany(models.Bill, {through: 'Bill-Detail', as:'BillProduct'});
  }; 
  return Product;
};