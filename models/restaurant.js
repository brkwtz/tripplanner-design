const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Restaurant = dbConnection.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    set: function(str) {
      var arrayofCuisines;
      if (typeof str === 'string') {
        arrayofCuisines = str.split(',').map(function(s) {
          return s.trim();
        });
        this.setDataValue('cuisine', arrayofCuisines);
      } else {
        this.setDataValue('cuisine', arrayofCuisines);
      }
    }
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      max: 5,
      min: 1
    }
  }
});

module.exports = Restaurant;
