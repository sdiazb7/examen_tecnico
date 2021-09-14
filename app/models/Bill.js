'use strict';

module.exports = (sequelize, DataTypes) => {

  const Bill = sequelize.define('Bill', {
    date_purchase: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: "bills"
  });



  Bill.associate = function(models) { 
	Bill.belongsToMany(models.Product, {through: 'Bill-Detail', as:'BillProduct'});
  };


  return Bill;
};