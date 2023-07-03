const database = require("../../utils/database");
const Users = require("./users.models");
const { DataTypes } = require("sequelize");

const Projects = database.define(
  "Projects",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
      unique: true,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
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
