const Sequelize = require('sequelize');
const sequelize = require('../db/SQLdatabase');

const Comments = sequelize.define('comments', {
  comment: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date:{
    type: Sequelize.DATE,
    allowNull: false,
  }
});

module.exports = Comments;
