const Sequelize = require('sequelize');

const dbConnection = new Sequelize('postgres://localhost:5432/tripplanner');

module.exports = dbConnection;
