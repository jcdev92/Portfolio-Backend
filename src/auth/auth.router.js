const router = require("express").Router();
const authServices = require("../auth/auth.services");
const { registerUser } = require("../users/users.services");

router.post("/register", registerUser);
router.post("/login", authServices.login);

module.exports = router;
