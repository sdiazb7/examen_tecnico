'use strict';

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "El nombre solo puede contener letras"
        },
        len: {
          args: [2, 255],
          msg: "El nombre tiene que ser minimamente de dos caracters"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email invalido"
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "La contraseña debe ser de minimo 6 caracteres"
        }
      }
    },
  }, {
    tableName: "users"
  });

  User.associate = function(models) {
    User.belongsTo(models.Role, { as: "roles", foreignKey: "role_id" });
	User.hasMany(models.Bill, { as: "bills", foreignKey: "client_id" });
  };

  // Comprueba que el usuario es administrador
  User.isAdmin = function(roles) {
    let tmpArray = [];
    roles.forEach(role => tmpArray.push(role.role));

    return tmpArray.includes('admin');
  }

  return User;
};