"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          "users",
          "provider_id",
          {
            type: Sequelize.DataTypes.INTEGER,
            after: "password",
          },
          { transaction: t },
        ),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("users", "provider_id", { transaction: t }),
      ]);
    });
  },
};
