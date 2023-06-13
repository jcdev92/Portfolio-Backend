const { getUserByEmail } = require("../users/users.controller");
const { comparePassword } = require("../utils/crypto");

const loginUser = async (email, password) => {
  try {
    const user = await getUserByEmail(email);
    const verifiedPassword = await comparePassword(password, user.password);
    if (verifiedPassword) {
      return user;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

module.exports = {
  loginUser,
};
