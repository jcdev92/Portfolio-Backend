const Projects = require("../models/projects.models");

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
const getProjectById = async (id) => await Projects.findOne({ where: { id } });

// get all projects
const getAllProjects = async () => await Projects.findAll();

// update a project
const updateProject = async (id, data) =>
  await Projects.update(data, { where: { id } });

// delete a project
const deleteProject = async (id) => await Projects.destroy({ where: { id } });

module.exports = {
  createProject,
  getProjectById,
  getAllProjects,
  updateProject,
  deleteProject,
};
