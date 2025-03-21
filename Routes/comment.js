const express = require("express");
const router = express.Router();
const commCont = require("../controllers/comment");
const auth = require("../middleware/authentication");

router.post("/comment",auth,commCont.addComment);
router.get("/comment/:videoId",commCont.getCommentByVideoId);

module.exports = router