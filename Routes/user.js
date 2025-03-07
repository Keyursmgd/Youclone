const express = require("express");
const router = express.Router();
const control = require("../controllers/user")

router.post("/signUp",control.signUp)


module.exports = router