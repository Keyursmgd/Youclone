const express = require("express");
const router = express.Router();
const vidcontr = require("../controllers/video")
const auth = require("../middleware/authentication");

router.post('/video',auth,vidcontr.upload)
router.get('/allVideo',vidcontr.getAllVideo)
router.get('/getVidId/:id',vidcontr.getVidId)
router.get('/:userId/channel',vidcontr.getAllVideoByUserID)

module.exports = router