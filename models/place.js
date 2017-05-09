const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Place = dbConnection.define('place', {
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT, Sequelize.FLOAT)
  }
});

module.exports = Place;
