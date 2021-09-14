'use strict';
module.exports = (sequelize, DataTypes) => {

  const Role = sequelize.define('Role', {
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: "roles"
  });

  Role.associate = function(models) { 
	Role.hasMany(models.User, { as: "rol", foreignKey: "role_id" });
  };

  return Role;
};