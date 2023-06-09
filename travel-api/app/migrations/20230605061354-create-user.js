"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      role: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("Users", {
      fields: ["role"],
      type: "foreign key",
      name: "fk_role_id",
      references: {
        table: "Roles",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "RESTRICT",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Users", "fk_role_id");
    await queryInterface.dropTable("Users");
  },
};
