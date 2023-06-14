const router = require("express").Router();
const passport = require("passport");
const {
  createProject,
  getProjectById,
  getAllProjects,
  updateProject,
  deleteProject,
  addSkillToProject,
  removeSkillFromProject,
} = require("./projects.services");
const adminValidate = require("../middlewares/role.middleware");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(getAllProjects)
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    createProject
  );

router
  .route("/:id")
  .get(getProjectById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    updateProject
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    deleteProject
  );

router
  .route("/:id/skills")
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    addSkillToProject
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    removeSkillFromProject
  );

module.exports = router;
