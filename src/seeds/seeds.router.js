const router = require("express").Router();
const { seed } = require("./seeds.services");1

router.route("/")
    .post(seed);

module.exports = router;

