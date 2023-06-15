const categoriesController = require("./categories.controller");

const getAllCategories = (req, res) => {
  categoriesController
    .getAllCategories()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: err.message }));
};

const getCategoryById = (req, res) => {
  const { id } = req.params;
  categoriesController
    .getCategoryById(id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: err.message }));
};

const createCategory = (req, res) => {
  const { title } = req.body;
  const userId = req.user.id;
  if (title) {
    categoriesController
      .createCategory({ title, userId })
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(400).json({ message: err.message }));
  } else {
    res.status(400).json({ message: "Missing title" });
  }
};

const updateCategory = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  categoriesController
    .updateCategory(id, title)
    .then((data) => {
      if (data[0]) {
        res.status(200).json({ message: "Category updated" });
      } else {
        res.status(400).json({ message: "Category not found" });
      }
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};

const deleteCategory = (req, res) => {
  const { id } = req.params;
  categoriesController
    .deleteCategory(id)
    .then((data) => res.status(200).json(data, { message: "Category deleted" }))
    .catch((err) => res.status(400).json({ message: err.message }));
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
