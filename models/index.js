const dbConnection = require('./db');
const HotelModel = require('./hotel');
const PlaceModel = require('./place');
const ActivityModel = require('./activity');
const RestaurantModel = require('./restaurant');

HotelModel.belongsTo(PlaceModel);
RestaurantModel.belongsTo(PlaceModel);
ActivityModel.belongsTo(PlaceModel);

module.exports = {
  db: dbConnection,
  Hotel: HotelModel,
  Place: PlaceModel,
  Activity: ActivityModel,
  Restaurant: RestaurantModel
};
