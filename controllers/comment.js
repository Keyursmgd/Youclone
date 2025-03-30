const db = require("../models/index"); // Import the whole models directory
const comm = db.Comm;

exports.addComment = async (req, res) => {
    try {
        let { video, message } = req.body;
        console.log(req.body)
        if (!video || !message) {
            return res.status(400).json({ error: "Video ID and message are required" });
        }
        const comment = await comm.create({
            user: req.user.id,
            vid: video,
            mess: message
        });

        res.status(201).json({
            message: "success",
            comment
        })
    } catch (error) {
        console.error("Error in adding comment:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.getCommentByVideoId = async (req, res) => {
    try {
        let { videoId } = req.params;
        const comments = await comm.findAll({
            where: { vid: videoId },
            include: [
                {
                    model: db.User, // Ensure this matches your Sequelize model name
                    attributes: ["channelName", "profilePic", "userName"],
                },
            ],
        });
        
        
        res.status(201).json({
            message: "success",
            comments
        });
    } catch (error) {
        console.error("Error in getting comment-id:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}