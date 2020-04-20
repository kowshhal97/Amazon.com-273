const Sequelize = require('sequelize');
const sequelize = require('../db/SQLdatabase');

const Category = sequelize.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Category;
