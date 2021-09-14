'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
	  client_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
        model: "users",
        key: "id"
		},
		onDelete: "CASCADE"
      },
      value_total_bill: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2)
      },
      date_purchase: {
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
    return queryInterface.dropTable('bills');
  }
};