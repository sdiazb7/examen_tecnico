'use strict';

const { User } = require('../../models/index');
const bcrypt = require('bcrypt');
const authConfig = require('../../../config/auth');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      
      User.create({
        name: "Dana",
        email: "dana@gmail.es",
        password: bcrypt.hashSync("123456", +authConfig.rounds),
		role_id:1
      })

    ]);
  },

  down: (queryInterface, Sequelize) => {
    
      return Promise.all([
        queryInterface.bulkDelete('posts', null, {}),
        queryInterface.bulkDelete('users', null, {})
      ]);

  }
};
