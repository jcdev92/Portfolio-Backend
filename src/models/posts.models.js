const database = require("../utils/database");
const { DataTypes } = require("sequelize");
const User = require("./users.models");
const Category = require("./categories.models");

const Post = database.define(
  "Post",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    brief: {
      type: DataTypes.STRING(300),
      allowNull: false,
      unique: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false,
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
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "category_id",
      references: {
        model: Category,
        key: "id",
      },
    },
  },
  {
    tableName: "posts",
    timestamps: true,
  }
);

module.exports = Post;
