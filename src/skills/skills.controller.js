const Skills = require("../db/models/skills.models");

// creating the skill
const createSkill = async (data) => {
  const { title, icon, userId } = data;

  // if title or icon exists then throw error
  const titleExist = await Skills.findOne({
    where: sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), title.toLowerCase())
  });
  const iconExist = await Skills.findOne({
    where: sequelize.where(sequelize.fn('LOWER', sequelize.col('icon')), icon.toLowerCase())
  });

  if (titleExist || iconExist) {
    throw new Error("Skill already exists");
  } else {
    const newSkill = await Skills.create({
      title,
      icon,
      userId,
    });
    return newSkill;
  }
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
