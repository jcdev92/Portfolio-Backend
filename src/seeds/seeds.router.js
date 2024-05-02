const router = require("express").Router();
const { seedData } = require("./seeds.services");

router.route("/")
    .post(seedData);

module.exports = router;

