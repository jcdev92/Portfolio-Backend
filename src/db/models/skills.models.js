const database = require("../../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");

const Skills = database.define(
  "Skills",
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
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: "skills",
    timestamps: false,
  }
);

module.exports = Skills;
