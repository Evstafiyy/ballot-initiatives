"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Initiatives",
      [
        {
          title: "Initiative 1",
          description: "Выпить Пыва",
          totalVotes: 50,
          userId: 1,
        },
        {
          title: "Initiative 2",
          description: "Сходить на перекур",
          totalVotes: 80,
          userId: 2,
        },
        {
          title: "Initiative 3",
          description: "Покушать",
          totalVotes: 70,
          userId: 4,
        },
        {
          title: "Initiative 4",
          description: "Поспать",
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
