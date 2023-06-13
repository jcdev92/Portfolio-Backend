const router = require("express").Router();
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
const userServices = require("./users.services");
require("../middlewares/auth.middleware")(passport);

// routes
router.route("/").get(userServices.allUsers);

// me routes
router
  .route("/me")
  .get(passport.authenticate("jwt", { session: false }), userServices.getMyUser)
  .patch(
    passport.authenticate("jwt", { session: false }),
    userServices.patchMyUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    userServices.deleteMyUser
  );

// routes by id
router
  .route("/:id")
  .get(userServices.getUser)
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userServices.patchUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userServices.deleteUser
  );

module.exports = router;
