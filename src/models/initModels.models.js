const Users = require("./users.model");
const Skills = require("./skills.models");
const SocialMedia = require("./socialMedia.models");
const Projects = require("./projects.models");
const ProjectsSkills = require("./projects_skills.models");

const initModels = () => {
  // relation - Users 1:M Skills
  Users.hasMany(Skills, { foreignKey: "userId" });
  Skills.belongsTo(Users, { foreignKey: "userId" });

  // relation - Users 1:M SocialMedia
  Users.hasMany(SocialMedia, { foreignKey: "userId" });
  SocialMedia.belongsTo(Users, { foreignKey: "userId" });

  // relation - Users 1:M Projects
  Users.hasMany(Projects, { foreignKey: "userId" });
  Projects.belongsTo(Users, { foreignKey: "userId" });

  // relation - Projects 1:M ProjectsSkills
  Projects.hasMany(ProjectsSkills, { foreignKey: "projectId" });
  ProjectsSkills.belongsTo(Projects, { foreignKey: "projectId" });

  // relation - Skills 1:M ProjectsSkills
  Skills.hasMany(ProjectsSkills, { foreignKey: "skillId" });
  ProjectsSkills.belongsTo(Skills, { foreignKey: "skillId" });
};

module.exports = initModels;
