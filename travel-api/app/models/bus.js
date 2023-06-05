"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bus extends Model {
    static associate(models) {
      Bus.hasMany(models.Schedule, {
        foreignKey: "BusId",
      });
    }
  }
  Bus.init(
    {
      name: DataTypes.STRING,
      number_plate: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bus",
    }
  );
  return Bus;
};
