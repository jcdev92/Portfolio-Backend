const projectsController = require("./projects.controller");

// create a project
const createProject = (req, res) => {
  const { title, description, image, url, github } = req.body;
  const userId = req.user.id;
  if (title && description && image && url && github) {
    projectsController
      .createProject({ title, description, image, url, github, userId })
      .then((data) => {
        res.status(201).json({ message: "Project created!", data });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "Missing required information",
      fields: {
        title: "string",
        description: "string",
        image: "string (url)",
        url: "string (url)",
        github: "string (url)",
      },
    });
  }
};

// get a project by id

const getProjectById = (req, res) => {
  const { id } = req.params;
  projectsController
    .getProjectById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: `Project ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

// get all projects
const getAllProjects = (req, res) => {
  projectsController
    .getAllProjects()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

// update a project

const updateProject = (req, res) => {
  const { id } = req.params;
  const { title, description, image, url, github } = req.body;

  projectsController
    .updateProject(id, { title, description, image, url, github })
    .then((data) => {
      if (data[0]) {
        res.status(200).json({ message: `Project ${id} updated!` });
      } else {
        res.status(404).json({ message: `Project ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

// delete a project

const deleteProject = (req, res) => {
  const { id } = req.params;
  projectsController
    .deleteProject(id)
    .then((data) => {
      if (data) {
        res.status(200).json({ message: `Project ${id} deleted!` });
      } else {
        res.status(404).json({ message: `Project ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  createProject,
  getProjectById,
  getAllProjects,
  updateProject,
  deleteProject,
};
