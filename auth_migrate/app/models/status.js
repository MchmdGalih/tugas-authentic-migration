"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {
      Status.belongsTo(models.user, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "RESTRICT",
      });
    }
  }
  Status.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      user_id: DataTypes.STRING,
      title: DataTypes.STRING,
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Status",
    }
  );
  return Status;
};
