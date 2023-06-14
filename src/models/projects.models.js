const database = require("../utils/database");
const Users = require("./users.model");
const { DataTypes } = require("sequelize");
const uuid = require("uuid");

const Projects = database.define(
  "Projects",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuid.v4(),
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "user_id",
      references: {
        model: Users,
        key: "id",
      },
    },
  },
  {
    tableName: "projects",
  }
);

module.exports = Projects;
