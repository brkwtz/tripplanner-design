const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Activity = dbConnection.define('activity', {
  name: {
    type: Sequelize.STRING
  },
  age_range: {
    type: Sequelize.STRING
  }
});

module.exports = Activity;
