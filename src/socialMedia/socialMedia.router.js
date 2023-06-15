const router = require("express").Router();
const {
  createSocialMedia,
  getSocialMediaById,
  getAllSocialMedia,
  updateSocialMedia,
  deleteSocialMedia,
} = require("./socialMedia.services");
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(passport.authenticate("jwt", { session: false }), getAllSocialMedia)
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    createSocialMedia
  );

router
  .route("/:id")
  .get(passport.authenticate("jwt", { session: false }), getSocialMediaById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    updateSocialMedia
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    deleteSocialMedia
  );

module.exports = router;
