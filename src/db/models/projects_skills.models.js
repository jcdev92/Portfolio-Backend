const Skills = require("./skills.models");
const Projects = require("./projects.models");
const db = require("../../utils/database");
const { DataTypes } = require("sequelize");

const ProjectsSkills = db.define(
  "ProjectsSkills",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    projectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "project_id",
      references: {
        model: Projects,
        key: "id",
      },
    },
    skillId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "skill_id",
      references: {
        model: Skills,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "projects_skills",
  }
);

module.exports = ProjectsSkills;
