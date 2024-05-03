const MessageModule = require("../db/models/messages.model")

const createMessage = async (data) => await MessageModule.create(data);

const getMessages = async () => await MessageModule.findAll();

const deleteMessage = async (id) => await MessageModule.destroy({ where: { id } });

module.exports = { createMessage, getMessages, deleteMessage };