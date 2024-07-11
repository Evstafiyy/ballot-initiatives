"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "User User User",
          email: "user@mail.ru",
          password: await bcrypt.hash("12345",10),
        },
        {
          fullName: "biba boba bobr",
          email: "biba@mail.ru",
          password:await bcrypt.hash("12345",10),
        },
        {
          fullName: "biba bobr bibr",
          email: "boba@mail.ru",
          password: await bcrypt.hash("12345",10),
        },
        {
          fullName: "bobr kurva perdole",
          email: "bobr@mail.ru",
          password: await bcrypt.hash("12345",10),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
