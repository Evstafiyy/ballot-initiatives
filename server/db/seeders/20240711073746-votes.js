"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Votes",
      [
        {
          userId: 1,
          initiativeId: 1,
          vote: true,
        },
        {
          userId: 2,
          initiativeId: 1,
          vote: true,
        },
        {
          userId: 4,
          initiativeId: 2,
          vote: false,
        },
        {
          userId: 1,
          initiativeId: 3,
          vote: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Votes", null, {});
  },
};
