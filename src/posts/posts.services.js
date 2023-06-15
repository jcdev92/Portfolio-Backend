const postController = require("./posts.controller");

const getAllPosts = (req, res) => {
  postController
    .getAllPosts()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getPostById = (req, res) => {
  const { id } = req.params;
  postController
    .getPostById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createPost = (req, res) => {
  const { title, brief, content, image, categoryId } = req.body;
  const userId = req.user.id;
  console.log(userId);
  if (title && brief && content && image && categoryId) {
    postController
      .createPost({ title, brief, content, image, userId, categoryId })
      .then((data) => {
        res.status(201).json({ message: `Post created`, data });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "Missing required information",
      fields: {
        title: "string",
        brief: "string",
        content: "string",
        image: "string (url)",
        categoryId: "uuid",
      },
    });
  }
};

const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, brief, content, image, categoryId } = req.body;
  postController
    .updatePost(id, { title, brief, content, image, categoryId })
    .then((data) => {
      if (data[0]) {
        res.status(200).json({ message: `Post ${id} updated` });
      } else {
        res.status(404).json({ message: `Post ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deletePost = (req, res) => {
  const { id } = req.params;
  postController
    .deletePost(id)
    .then(() => {
      res.status(200).json({ message: `Post ${id} deleted` });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
