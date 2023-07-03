const database = require("../../utils/database");
const { DataTypes } = require("sequelize");
const User = require("./users.models");

const Category = database.define(
  "Category",
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
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "user_id",
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "categories",
  }
);

module.exports = Category;
