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