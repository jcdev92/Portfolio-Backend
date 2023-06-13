const skillsControllers = require("../skills/skills.controller");

// creating a skill
const createSkill = (req, res) => {
  const { title, icon } = req.body;
  const userId = req.user.id;
  if (title && icon) {
    skillsControllers
      .createSkill({ title, icon, userId })
      .then((data) => {
        res.status(201).json({ message: "Skill created!", data });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "Missing required information",
      fields: { title: "string", icon: "string (url)" },
    });
  }
};

// getting one skill
const getSkillById = (req, res) => {
  const { id } = req.params;
  skillsControllers
    .getSkillById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Skill not found" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

// getting all skills
const getAllSkills = (req, res) => {
  skillsControllers
    .getAllSkills()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

// updating a skill
const updateSkill = (req, res) => {
  const { id } = req.params;
  const { title, icon } = req.body;

  skillsControllers
    .updateSkill(id, { title, icon })
    .then((data) => {
      if (data[0]) {
        res.status(200).json({ message: `Skill ${id} updated successfully` });
      } else {
        res.status(404).json({ message: `Skill ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

// deleting a skill

const deleteSkill = (req, res) => {
  const { id } = req.params;
  skillsControllers
    .deleteSkill(id)
    .then((data) => {
      if (data) {
        res.status(200).json({ message: `Skill ${id} deleted successfully` });
      } else {
        res.status(404).json({ message: `Skill ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  createSkill,
  getSkillById,
  getAllSkills,
  updateSkill,
  deleteSkill,
};
