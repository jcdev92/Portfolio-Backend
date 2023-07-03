const Category = require("../db/models/categories.models");

const getAllCategories = async () => await Category.findAll();

const getCategoryById = async (id) => await Category.findOne({ where: { id } });

const createCategory = async (data) => {
  const { title, userId } = data;
  const newCategory = await Category.create({
    title,
    userId,
  });
  return newCategory;
};

const updateCategory = async (id, data) =>
  await Category.update(data, { where: { id } });

const deleteCategory = async (id) => await Category.destroy({ where: { id } });

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
