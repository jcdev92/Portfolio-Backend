const { registerMessage, getAllMessages, deleteAMessage } = require('./messages.services');
const router = require("express").Router();
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
require("../middlewares/auth.middleware")(passport);

router.post('/', registerMessage);
router.get('/', passport.authenticate("jwt", { session: false }),
adminValidate, getAllMessages);
router.delete('/:id', passport.authenticate("jwt", { session: false }), adminValidate, deleteAMessage);

module.exports = router;