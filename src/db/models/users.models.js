const database = require("../../utils/database");
const { DataTypes } = require("sequelize");

const Users = database.define(
  "Users",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "first_name",
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "last_name",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    birthDay: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "birth_day",
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
    },
    profileImg: {
      type: DataTypes.STRING,
      field: "profile_img",
    },
    jobTitle: {
      type: DataTypes.STRING,
      field: "job_title",
      defaultValue: "Developer",
    },
    aboutMe: {
      type: DataTypes.TEXT,
      field: "about_me",
      defaultValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestias, reiciendis corrupti pariatur harum natus et ex atque quidem quod quaerat nesciunt expedita ullam nulla dignissimos assumenda modi mollitia iste?",
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "admin",
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);

module.exports = Users;
