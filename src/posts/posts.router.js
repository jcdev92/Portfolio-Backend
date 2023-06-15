const router = require("express").Router();
const adminValidate = require("../middlewares/role.middleware");
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("./posts.services");

router
  .route("/")
  .get(passport.authenticate("jwt", { session: false }), getAllPosts)
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    createPost
  );

router
  .route("/:id")
  .get(passport.authenticate("jwt", { session: false }), getPostById)
  .put(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    updatePost
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    deletePost
  );

module.exports = router;
