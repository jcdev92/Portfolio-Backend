const socialMediaControllers = require("./socialMedia.controller");

// creating a social media
const createSocialMedia = (req, res) => {
  const { title, icon, url } = req.body;
  const userId = req.user.id;
  if (title && icon && url) {
    socialMediaControllers
      .createSocialMedia({ title, icon, url, userId })
      .then((data) => {
        res.status(201).json({ message: "Social media created!", data });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "Missing required information",
      fields: { title: "string", icon: "string (url)", url: "string (url)" },
    });
  }
};

// getting one social media

const getSocialMediaById = (req, res) => {
  const { id } = req.params;
  socialMediaControllers
    .getSocialMediaById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: `Social media ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

// getting all social media
const getAllSocialMedia = (req, res) => {
  socialMediaControllers
    .getAllSocialMedia()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

// updating a social media
const updateSocialMedia = (req, res) => {
  const { id } = req.params;
  const { title, icon, url } = req.body;

  socialMediaControllers
    .updateSocialMedia(id, { title, icon, url })
    .then((data) => {
      if (data[0]) {
        res.status(200).json({ message: `Social media ${id} updated!` });
      } else {
        res.status(404).json({ message: `Social media ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

// deleting a social media
const deleteSocialMedia = (req, res) => {
  const { id } = req.params;
  socialMediaControllers
    .deleteSocialMedia(id)
    .then((data) => {
      if (data) {
        res.status(200).json({ message: `Social media ${id} deleted!` });
      } else {
        res.status(404).json({ message: `Social media ${id} not found` });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  createSocialMedia,
  getSocialMediaById,
  getAllSocialMedia,
  updateSocialMedia,
  deleteSocialMedia,
};
