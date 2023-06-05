"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.User, {
        foreignKey: "UserId",
      });
      Booking.belongsTo(models.Schedule, {
        foreignKey: "ScheduleId",
      });
    }
  }
  Booking.init(
    {
      UserId: DataTypes.INTEGER,
      ScheduleId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
