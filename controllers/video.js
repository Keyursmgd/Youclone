const db = require("../models/index"); // Import the whole models directory
const Video = db.video; // Access the Video model
const { Op, where } = require("sequelize")



exports.upload = async(req,res) =>{
    try{
        const { title,description,videoLink,videoType,thumbnail} = req.body;
        const vidUpl= new Video({ userID: req.user.id,title,description,videoLink,videoType,thumbnail});
        await vidUpl.save();

        res.status(201).json({success:"true",vidUpl})
    }catch(error){
        console.error("Error in Uploading Video:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.getAllVideo = async(req,res) =>{
    try{
        const vids = await Video.findAll({
            include: [
                {
                    model: db.User, // Ensure this matches your Sequelize model name
                    attributes: ["channelName", "profilePic", "userName"],
                },
            ],
        });
        res.status(201).json({success:"true","videos":vids})
    }catch(error){
        console.error("Error in getting vid:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.getVidId = async (req,res) => {
    try {
        let {id} = req.params
        const video = await Video.findByPk(id,{
            include: [
                {
                    model: db.User, // Ensure this matches your Sequelize model name
                    attributes: ["channelName", "profilePic", "userName"],
                },
            ],
        });

        if (!video) {
            return res.status(404).json({ success: "false", message: "Video not found" });
        }

        res.status(201).json({success:"true","video": video});
    } catch (error) {
        console.error("Error in getting video-id:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.getAllVideoByUserID = async (req, res) => {
    try {
        let { userId } = req.params;
        const videos = await Video.findAll({
            where: { userID: userId },
            include: [
                {
                    model: db.User,
                    attributes: ["channelName", "profilePic", "userName","about"],
                },
            ],
        });

        if (!videos || videos.length === 0) {
            return res.status(404).json({ success: "false", message: "Videos not found" });
        }

        // Modify response structure
        const formattedVideos = videos.map(video => ({
            id: video.id,
            title: video.title,
            description: video.description,
            videoLink: video.videoLink,
            thumbnail: video.thumbnail,
            videoType: video.videoType,
            like: video.like,
            dislike: video.dislike,
            createdAt: video.createdAt,
            updatedAt: video.updatedAt,
            user: video.User ? {   // Ensure user data exists
                channelName: video.User.channelName,
                userName: video.User.userName,
                profilePic: video.User.profilePic,
                about:video.User.about
            } : null
        }));

        res.status(200).json({ success: "true", video: formattedVideos });
    } catch (error) {
        console.error("Error in getting videos by user ID:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.search = async (req,res) => {
    
    try {
        const query = req.query.q;
        if(!query){
            return res.status(400).json({message: "Search query is required"});
        }
        const video = await Video.findOne({
            where:{
                title:{
                    [Op.like]: `%${query}%`,
                },
            },
        });

        if (!video){
            res.status(404).json({message: "No video found"});
        }
        res.status(201).json({video});
    } catch (error) {
        console.error("Error in searching videos:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}