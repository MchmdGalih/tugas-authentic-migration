"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      Schedule.belongsTo(models.Bus, {
        foreignKey: "BusId",
      });
      Schedule.belongsTo(models.User, {
        foreignKey: "DriverId",
      });
      Schedule.belongsTo(models.Route, {
        foreignKey: "RouteId",
      });
      Schedule.hasMany(models.Booking, {
        foreignKey: "ScheduleId",
      });
    }
  }
  Schedule.init(
    {
      RouteId: DataTypes.INTEGER,
      BusId: DataTypes.INTEGER,
      DriverId: DataTypes.INTEGER,
      travel_date: DataTypes.DATEONLY,
      departure_time: DataTypes.TIME,
      arrival_time: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
