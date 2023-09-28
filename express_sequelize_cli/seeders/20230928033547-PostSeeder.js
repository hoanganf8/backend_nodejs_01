"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          title: "Bài viết 1",
          content: "Nội dung 1",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Bài viết 2",
          content: "Nội dung 2",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Bài viết 3",
          content: "Nội dung 3",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Bài viết 4",
          content: "Nội dung 4",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("posts", null, {});
  },
};
