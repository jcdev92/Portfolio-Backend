const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");
const { loginUser } = require("./auth.controller");

const login = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    loginUser(email, password)
      .then((user) => {
        if (user) {
          const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            jwtSecret,
            { expiresIn: "20000" }
          );
          res.status(200).json({ token });
        } else {
          res.status(401).json({ message: "invalid credentials" });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Missing credentials" });
  }
};

module.exports = {
  login,
};
