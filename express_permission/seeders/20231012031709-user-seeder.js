"use strict";
const hash = require("../utils/hash");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];

    for (let index = 0; index < 50; index++) {
      const password = hash.make("123456");
      data.push({
        name: `User ${index + 1}`,
        email: `user${index + 1}@gmail.com`,
        password: password,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("users", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
