const Sequelize = require('sequelize');
const sequelize = require('../db/SQLdatabase');

const Seller = sequelize.define('seller', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address1: {
    type: Sequelize.STRING,
  },
  address2: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  country: {
    type: Sequelize.STRING,
  },
  zipcode: {
    type: Sequelize.STRING,
  },
});

module.exports = Seller;
