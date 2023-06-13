const bycrypt = require("bcryptjs");

const hashPassword = (password) => {
  return bycrypt.hashSync(password, 10);
};

const comparePassword = (plainPassword, hash) => {
  return bycrypt.compareSync(plainPassword, hash);
};

module.exports = {
  hashPassword,
  comparePassword,
};
