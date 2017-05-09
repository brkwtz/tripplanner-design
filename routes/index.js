const router = require('express').Router();
const Hotel = require('../models').Hotel;
const Restaurant = require('../models').Restaurant;
const Activity = require('../models').Activity;


router.get('/', function(req, res, next) {
  var hotelPromise = Hotel.findAll();
  var activityPromise = Activity.findAll();
  var restaurantPromise = Restaurant.findAll();

  Promise.all([hotelPromise, activityPromise, restaurantPromise])
  .then(function(results) {
    res.render('index', {hotels: results[0], activities: results[1], restaurants: results[2]});
  })
  .catch(next)
});



module.exports = router;
