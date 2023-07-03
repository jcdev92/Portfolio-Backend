const SocialMedia = require("../db/models/socialMedia.models");
const uuid = require("uuid");

// creating the social media
const createSocialMedia = async (data) => {
  const { title, icon, url, userId } = data;
  const newSocialMedia = await SocialMedia.create({
    id: uuid.v4(),
    title,
    icon,
    url,
    userId,
  });
  return newSocialMedia;
};

// getting the only one social media
const getSocialMediaById = async (id) =>
  await SocialMedia.findOne({ where: { id } });

// getting all social media
const getAllSocialMedia = async () => await SocialMedia.findAll();

// updating the social media
const updateSocialMedia = async (id, data) =>
  await SocialMedia.update(data, { where: { id } });

// deleting the social media
const deleteSocialMedia = async (id) =>
  await SocialMedia.destroy({ where: { id } });

module.exports = {
  createSocialMedia,
  getSocialMediaById,
  getAllSocialMedia,
  updateSocialMedia,
  deleteSocialMedia,
};
