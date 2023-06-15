const database = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");

const SocialMedia = database.define(
  "SocialMedia",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: "social_media",
    timestamps: false,
  }
);

module.exports = SocialMedia;
