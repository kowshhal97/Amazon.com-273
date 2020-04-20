const Sequelize = require('sequelize');
const sequelize = require('../db/SQLdatabase');

const Category = sequelize.define('category', {
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Category;
