const Skills = require("../models/skills.models");
const uuid = require("uuid");

// creating the skill
const createSkill = async (data) => {
  const { title, icon, userId } = data;
  const newSkill = await Skills.create({
    id: uuid.v4(),
    title,
    icon,
    userId,
  });
  return newSkill;
};

// getting the only one skill
const getSkillById = async (id) => await Skills.findOne({ where: { id } });

// getting all skills
const getAllSkills = async () => await Skills.findAll();

// updating the skill
const updateSkill = async (id, data) =>
  await Skills.update(data, { where: { id } });

// deleting the skill
const deleteSkill = async (id) => await Skills.destroy({ where: { id } });

module.exports = {
  createSkill,
  getSkillById,
  getAllSkills,
  updateSkill,
  deleteSkill,
};
