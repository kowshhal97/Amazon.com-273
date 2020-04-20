const Sequelize = require('sequelize');
const sequelize = require('../db/SQLdatabase');
const User=require('./User')

const Admin = sequelize.define('admin', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  }
});

Admin.belongsTo(User);

module.exports = Admin;
