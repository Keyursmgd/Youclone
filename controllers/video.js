const db = require("../models/index"); // Import the whole models directory
const Video = db.video; // Access the Video model



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

exports.getAllVideoByUserID = async(req,res) =>{
    try{
        let {userId} = req.params;
        const video = await Video.findAll({ 
            where: { userID: userId } 
        },{
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
    }catch (error) {
        console.error("Error in getting video-id:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}