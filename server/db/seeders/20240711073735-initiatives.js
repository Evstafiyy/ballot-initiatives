"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Initiatives",
      [
        {
          title: "Initiative 1",
          description: "Description of Initiative 1",
          totalVotes: 50,
          userId: 1,
        },
        {
          title: "Initiative 2",
          description: "Description of Initiative 1",
          totalVotes: 80,
          userId: 2,
        },
        {
          title: "Initiative 3",
          description: "Description of Initiative 1",
          totalVotes: 70,
          userId: 4,
        },
        {
          title: "Initiative 4",
          description: "Description of Initiative 1",
          totalVotes: 100,
          userId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Initiatives", null, {});
  },
};
