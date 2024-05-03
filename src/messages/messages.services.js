const {createMessage, getMessages, deleteMessage} = require('./messages.controller')

const registerMessage = (req, res) => {
    const { name, email, subject, message } = req.body;
    if (name && email && subject && message) {
        createMessage({ name, email, subject, message })
        .then((data) => {
          res.status(201).json({ message: `message registered succesfully!`, data });
        })
        .catch((err) => {
          res.status(400).json({ message: err.message });
        });
    } else {
      res.status(400).json({
        message: "Missing required information",
        fields: { name: "string", email: "string", subject: "string", message: "string" },
      });
    }
  };

const getAllMessages = (req, res) => {
    getMessages()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err))
}

const deleteAMessage = (req, res) => {
    const { id } = req.params;
    deleteMessage(id)
      .then((data) => {
        if (data) {
          res
            .status(200)
            .json({ message: `Message with id: ${id} deleted successfully`, id });
        } else {
          res.status(404).json({ message: `Message with id: ${id} not found` });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  };

module.exports = { registerMessage, getAllMessages, deleteAMessage };