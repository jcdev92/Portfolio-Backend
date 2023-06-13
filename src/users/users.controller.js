const Users = require("../models/users.model");
const Skills = require("../models/skills.models");
const SocialMedia = require("../models/socialMedia.models");
const uuid = require("uuid");
const { hashPassword } = require("../utils/crypto");

// creating the user
const createUser = async (data) => {
  const existingUser = await Users.findOne();

  if (existingUser) {
    throw new Error("Users limit is reached");
  }

  const {
    firstName,
    lastName,
    password,
    email,
    phone,
    birthDay,
    gender,
    country,
  } = data;
  const newUser = await Users.create({
    id: uuid.v4(),
    firstName,
    lastName,
    password: hashPassword(password),
    email,
    phone,
    birthDay,
    gender,
    country,
  });
  return newUser;
};

// getting the only one user
const getUserById = async (id) =>
  await Users.findOne({
    where: { id },
    attributes: {
      exclude: ["password", "status", "createdAt", "updatedAt"],
    },
    include: [
      {
        model: Skills,
        attributes: ["id", "title", "icon"],
      },
      {
        model: SocialMedia,
        attributes: ["id", "title", "icon", "url"],
      },
    ],
  });

// getting all users
const getAllUsers = async () =>
  await Users.findAll({
    where: {
      status: "active",
    },
    attributes: {
      exclude: ["password", "status", "createdAt", "updatedAt"],
    },
    include: [
      {
        model: Skills,
        attributes: ["id", "title", "icon"],
      },
      {
        model: SocialMedia,
        attributes: ["id", "title", "icon", "url"],
      },
    ],
  });

// updating the user
const updateUser = async (id, data) =>
  await Users.update(data, { where: { id } });

// deleting the user
const deleteUser = async (id) => await Users.destroy({ where: { id } });

// get user by email
const getUserByEmail = async (email) =>
  await Users.findOne({ where: { email, status: "active" } });

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserByEmail,
};
