const router = require("express").Router();
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("./categories.services");
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(passport.authenticate("jwt", { session: false }), getAllCategories)
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    createCategory
  );

router
  .route("/:id")
  .get(passport.authenticate("jwt", { session: false }), getCategoryById)
  .put(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    updateCategory
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    deleteCategory
  );

module.exports = router;
