const Users = require("./users.models");
const Skills = require("./skills.models");
const SocialMedia = require("./socialMedia.models");
const Projects = require("./projects.models");
const ProjectsSkills = require("./projects_skills.models");
const Category = require("./categories.models");
const Posts = require("./posts.models");

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

  // relation - Users 1:M categories
  Users.hasMany(Category, { foreignKey: "userId" });
  Category.belongsTo(Users, { foreignKey: "userId" });

  // relation - Users 1:M Posts
  Users.hasMany(Posts, { foreignKey: "userId" });
  Posts.belongsTo(Users, { foreignKey: "userId" });

  // relation - Category 1:M Posts
  Category.hasMany(Posts, { foreignKey: "categoryId" });
  Posts.belongsTo(Category, { foreignKey: "categoryId" });
};

module.exports = initModels;
