const Projects = require("../models/projects.models");
const ProjectsSkills = require("../models/projects_skills.models");
const Skills = require("../models/skills.models");

// create a project
const createProject = async (data) => {
  const { title, description, image, url, github, userId } = data;
  const newProject = await Projects.create({
    title,
    description,
    image,
    url,
    github,
    userId,
  });
  return newProject;
};

// get a project by id
const getProjectById = async (id) =>
  await Projects.findOne({
    where: { id },
    attributes: {
      exclude: ["userId", "createdAt", "updatedAt"],
    },
    include: [
      {
        model: ProjectsSkills,
        attributes: {
          exclude: ["projectId", "skillId", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: Skills,
            attributes: ["id", "title", "icon"],
          },
        ],
      },
    ],
  });

// get all projects
const getAllProjects = async () =>
  await Projects.findAll({
    attributes: {
      exclude: ["userId", "createdAt", "updatedAt"],
    },
    include: [
      {
        model: ProjectsSkills,
        attributes: {
          exclude: ["projectId", "skillId", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: Skills,
            attributes: ["id", "title", "icon"],
          },
        ],
      },
    ],
  });

// update a project
const updateProject = async (id, data) =>
  await Projects.update(data, { where: { id } });

// delete a project
const deleteProject = async (id) => await Projects.destroy({ where: { id } });

// add a skill to a project
const addSkillToProject = async (data) => {
  const { projectId, skillId } = data;
  const newSkill = await ProjectsSkills.create({ projectId, skillId });
  return newSkill;
};

// remove a skill from a project
const removeSkillFromProject = async (data) => {
  const { projectId, skillId } = data;
  const deletedSkill = await ProjectsSkills.destroy({
    where: { projectId, skillId },
  });
  return deletedSkill;
};

module.exports = {
  createProject,
  getProjectById,
  getAllProjects,
  updateProject,
  deleteProject,
  addSkillToProject,
  removeSkillFromProject,
};
