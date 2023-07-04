"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { DataTypes } = Sequelize;
    /**
     * Add altering commands here.
     * I want to add to columns, biography and bio_image to the users table
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("users", "biography", {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true,
    });
    await queryInterface.addColumn("users", "bioImage", {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      field: "bio_image",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
