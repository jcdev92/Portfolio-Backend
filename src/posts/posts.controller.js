const Post = require("../models/posts.models");
const User = require("../models/users.models");
const Category = require("../models/categories.models");

const getAllPosts = async () =>
  await Post.findAll({
    attributes: ["id", "title", "brief", "content", "image", "createdAt"],
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName", "email"],
      },
      {
        model: Category,
        attributes: ["id", "title"],
      },
    ],
  });

const getPostById = async (id) =>
  await Post.findOne(id, {
    attributes: ["id", "title", "brief", "content", "image", "createdAt"],
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName", "email"],
      },
      {
        model: Category,
        attributes: ["id", "title"],
      },
    ],
  });

const createPost = async (data) => {
  const { title, brief, content, image, userId, categoryId } = data;
  const newPost = await Post.create({
    title,
    brief,
    content,
    image,
    userId,
    categoryId,
  });
  return newPost;
};

const updatePost = async (id, data) =>
  await Post.update(data, { where: { id } });

const deletePost = async (id) => await Post.destroy({ where: { id } });

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
