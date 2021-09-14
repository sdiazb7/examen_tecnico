'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
	  lot_number: {
        allowNull: false,
		type: Sequelize.STRING
      },
	  product_name: {
        allowNull: false,
        type: Sequelize.STRING
      },price: {
        allowNull: false,
		type: Sequelize.DECIMAL(8, 2)
      },
	  quantity_available: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      admission_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },	  
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};