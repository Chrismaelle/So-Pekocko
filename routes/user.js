const express = require("express");
const router = express.Router();
const rat = require("../middleware/limit");

const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);

router.post("/login", rat.limiter, userCtrl.login);

module.exports = router;
