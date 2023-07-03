"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * I wan to add a unique constraint to the title and icon column of the skills table
     * Add altering commands here.
     **/
    await queryInterface.addConstraint("skills", {
      fields: ["title", "icon"],
      type: "unique",
      name: "unique_skills_title_icon",
    });

    /**
     * I want to add a unique constraint to the title, github and url column of the projects table
     */
    await queryInterface.addConstraint("projects", {
      fields: ["title", "github", "url"],
      type: "unique",
      name: "unique_projects_title_github_url",
    });

    /**
     * I want to add a unique constraint to the title, icon and url column of the social_media table
     *
     */
    await queryInterface.addConstraint("social_media", {
      fields: ["title", "icon", "url"],
      type: "unique",
      name: "unique_social_media_title_icon_url",
    });

    /**
     * I want to add a unique constraint to the title and the brief column of the posts table
     * Add altering commands here.
     * */
    await queryInterface.addConstraint("posts", {
      fields: ["title", "brief"],
      type: "unique",
      name: "unique_posts_title_brief",
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
