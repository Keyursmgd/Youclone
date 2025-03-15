const User = require('../models/user');
const bcrypt = require('bcryptjs');


exports.signUp = async (req, res) => {
    // console.log("In signup function")
    try {
        const { channelName, userName, about, profilePic,password } = req.body;
        const isExist = await User.findOne({ userName });
        console.log(isExist);
        if (isExist) {
            res.status(400).json({ error: "Username already exist. Please try again" });
        } else {
            let updateP = await bcrypt.hash(password, 10);
            const use = new User({ channelName, userName, about,profilePic, password: updateP});
            await use.save();
            res.status(201).json({ message: "User registered successfully", success: "yes", data: User });
        }

    } catch (error) {

    }
}