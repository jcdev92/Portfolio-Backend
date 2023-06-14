const Users = require("./users.model");
const Skills = require("./skills.models");
const SocialMedia = require("./socialMedia.models");
const Projects = require("./projects.models");

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
};

module.exports = initModels;
