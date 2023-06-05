"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    static associate(models) {
      Route.hasMany(models.Schedule, {
        foreignKey: "RouteId",
      });
    }
  }
  Route.init(
    {
      name: DataTypes.STRING,
      origin: DataTypes.STRING,
      destination: DataTypes.STRING,
      distance: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Route",
    }
  );
  return Route;
};
