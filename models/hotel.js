const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Hotel = dbConnection.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      max: 5,
      min: 1
    }
  },
  amenities: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    set: function(str) {
      var arrayofAmenities;
      if (typeof str === 'string') {
        arrayofAmenities = str.split(',').map(function(s) {
          return s.trim();
        });
        this.setDataValue('amenities', arrayofAmenities);
      } else {
        this.setDataValue('amenities', arrayofAmenities);
      }
    }
  }
});

module.exports = Hotel;
