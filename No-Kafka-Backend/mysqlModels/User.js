const Sequelize = require('sequelize');
const sequelize = require('../db/SQLdatabase');

const User = sequelize.define('admin', {
  
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userType:{
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = User;
