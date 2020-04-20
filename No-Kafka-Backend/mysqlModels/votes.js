const Sequelize = require('sequelize');
const sequelize = require('../db/SQLdatabase');

const Votes = sequelize.define('votes', {
  rating: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  date:{
    type: Sequelize.DATE,
    allowNull: false,
  }
});

module.exports = Votes;
