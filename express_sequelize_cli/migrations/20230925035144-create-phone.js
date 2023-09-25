"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Phones", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      phone_number: {
        type: Sequelize.STRING(15),
      },

      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users", //Tên bảng tham chiếu
          },
          key: "id", //Khóa chính của bảng cần tham chiếu
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Phones");
  },
};
