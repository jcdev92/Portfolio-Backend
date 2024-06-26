const { seedDatabase } = require("./seeds.controller");

const seedData = (req, res) => {
    seedDatabase()
    .then((data) => {
      res.status(200).json({
        message: "data seeded",
        data,
      });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

module.exports = { seedData };