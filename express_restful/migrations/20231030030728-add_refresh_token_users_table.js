"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("users", "refresh_token", {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("users", "refresh_token", {});
  },
};
