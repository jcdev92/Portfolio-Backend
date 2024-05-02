const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
require("../middlewares/auth.middleware")(passport);
const router = require("express").Router();
const { seed } = require("./seeds.services");

router.route("/")
    .post(passport.authenticate("jwt", { session: false }), adminValidate, seed);

module.exports = router;

