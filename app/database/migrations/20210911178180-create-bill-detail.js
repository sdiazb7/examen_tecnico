'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bill-detail', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bill_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
		references: {
          model: "bills",
          key: "id"
        }
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id"
        }
      },
	  quantity: {
        allowNull: false,
		type: Sequelize.INTEGER
      },
	  quantity_value_total: {
        allowNull: false,
		type: Sequelize.DECIMAL(9,2)
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
    return queryInterface.dropTable('bills');
  }
};