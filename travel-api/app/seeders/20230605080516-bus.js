"use strict";

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
    const buses_data = [
      {
        name: "Budiman",
        capacity: 40,
        number_plate: "D 1234 JK",
        createdAt: datetime,
        updatedAt: datetime,
      },
      {
        name: "Karunia Bakti",
        capacity: 40,
        number_plate: "D 2345 JG",
        createdAt: datetime,
        updatedAt: datetime,
      },
      {
        name: "Sinar Jaya",
        capacity: 40,
        number_plate: "D 5678 SB",
        createdAt: datetime,
        updatedAt: datetime,
      },
    ];

    await queryInterface.bulkInsert("Buses", buses_data);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Buses", null, {});
  },
};
