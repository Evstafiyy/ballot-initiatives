"use strict";

const votes = [];
const totalElements = 80;

for (let i = 0; i < totalElements; i++) {
  votes.push({
    userId: Math.floor(Math.random() * 4) + 1,  // случайное значение от 1 до 10
    initiativeId: Math.floor(Math.random() * 4) + 1,  // случайное значение от 1 до 10
    vote: Math.random() >= 0.5,  // случайное булевое значение
  });
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Votes",
      votes,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Votes", null, {});
  },
};
