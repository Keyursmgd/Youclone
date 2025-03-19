const express = require("express");
const router = express.Router();
const vidcontr = require("../controllers/video")
const auth = require("../middleware/authentication");

router.post('/video',auth,vidcontr.upload)


module.exports = router