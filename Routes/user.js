const express = require("express");
const router = express.Router();
const control = require("../controllers/user")

router.post("/signUp",control.signUp);
router.post("/login",control.signIn);
router.post("/logout",control.logout);


module.exports = router