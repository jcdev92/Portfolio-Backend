const usersController = require("./users.controller");

// getting all users
const allUsers = (req, res) => {
  usersController
    .getAllUsers()
    .then((data) => {
      res.status(200).json({
        message: "All users",
        data,
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

// getting the only one user
const getUser = (req, res) => {
  const { id } = req.params;
  usersController
    .getUserById(id)
    .then((data) => {
      res.status(200).json({
        message: "User by id",
        data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Something went wrong",
        err,
      });
    });
};

// creating the user
const registerUser = (req, res) => {
  const {
    firstName,
    lastName,
    password,
    email,
    phone,
    birthDay,
    gender,
    country,
  } = req.body;

  if (
    firstName &&
    lastName &&
    password &&
    email &&
    phone &&
    birthDay &&
    gender &&
    country
  ) {
    usersController
      .createUser({
        firstName,
        lastName,
        password,
        email,
        phone,
        birthDay,
        gender,
        country,
      })
      .then((data) => {
        res.status(201).json({
          message: "User created",
          data,
        });
      })
      .catch((err) => {
        res.status(404).json({
          message: "Something went wrong",
          err: err.message,
        });
      });
  } else {
    res.status(400).json({
      message: "Missing data, complete all fields",
      fields: {
        firstName: "string",
        lastName: "string",
        password: "string",
        email: "example@example.com",
        phone: "+5212345625",
        birthDay: "YYYY/MM/DD",
        gender: "string",
        country: "string",
      },
    });
  }
};

// updating the user
const patchUser = (req, res) => {
  const { id } = req.params;
  const { role, ...updateData } = req.body;
  usersController
    .updateUser(id, updateData)
    .then((data) => {
      if (data[0]) {
        res.status(200).json({ message: "User updated", data });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

// deleting the user
const deleteUser = (req, res) => {
  const { id } = req.params;
  usersController
    .deleteUser(id)
    .then((data) => {
      if (data) {
        res.status(200).json({ message: "User deleted", data });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

// getting my user
const getMyUser = (req, res) => {
  const { id } = req.user;
  usersController
    .getUserById(id)
    .then((data) =>
      res
        .status(200)
        .json({ message: `User ${id} successfullly charged`, data })
    )
    .catch((error) =>
      res.status(404).json({ message: "user not found", error })
    );
};

// updating my user
const patchMyUser = (req, res) => {
  const { id } = req.user;
  const { role, ...updateData } = req.body;
  usersController
    .updateUser(id, updateData)
    .then(() =>
      res.status(200).json({ message: `User ${id} updated succesfully` })
    )
    .catch((error) =>
      res.status(400).json({ message: "something went wrong", error })
    );
};

const deleteMyUser = (req, res) => {
  const { id } = req.user;

  usersController
    .updateUser(id, { status: "inactive" })
    .then(() => {
      res.status(200).json({ message: "Your user was deleted succesfully" });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  allUsers,
  getUser,
  registerUser,
  patchUser,
  deleteUser,
  getMyUser,
  patchMyUser,
  deleteMyUser,
};
