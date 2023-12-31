const router = require("express").Router();
const {
  createSkill,
  getSkillById,
  getAllSkills,
  updateSkill,
  deleteSkill,
} = require("./skills.services");
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(passport.authenticate("jwt", { session: false }), getAllSkills)
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    createSkill
  );

router
  .route("/:id")
  .get(passport.authenticate("jwt", { session: false }), getSkillById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    updateSkill
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    deleteSkill
  );

module.exports = router;
