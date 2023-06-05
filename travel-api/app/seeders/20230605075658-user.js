"use strict";
const bcrypt = require("bcryptjs");
const date = new Date();

const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const day = ("0" + date.getDate()).slice(-2);
const hours = ("0" + date.getHours()).slice(-2);
const minutes = ("0" + date.getMinutes()).slice(-2);
const seconds = ("0" + date.getSeconds()).slice(-2);

const datetime = `${year} - ${month} - ${day} ${hours} : ${minutes} : ${seconds}`;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users_data = [
      {
        name: "Sono",
        email: "sone@gmail.com",
        password: bcrypt.hashSync("123", 8),
        role: 3,
        createdAt: datetime,
        updatedAt: datetime,
      },
      {
        name: "Siswo",
        email: "oktavian@gmail.com",
        password: bcrypt.hashSync("123", 8),
        role: 2,
        createdAt: datetime,
        updatedAt: datetime,
      },
      {
        name: "Wawan",
        email: "waputra@gmail.com",
        password: bcrypt.hashSync("123", 8),
        role: 1,
        createdAt: datetime,
        updatedAt: datetime,
      },
      {
        name: "Ucok",
        email: "ucok1@gmail.com",
        password: bcrypt.hashSync("123", 8),
        role: 2,
        createdAt: datetime,
        updatedAt: datetime,
      },
    ];

    await queryInterface.bulkInsert("Users", users_data);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
