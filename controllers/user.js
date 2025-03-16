const db = require("../models/index"); 
const User = db.User; // Use the Sequelize model from db
const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
    try {
        console.log("SignUp function called");
        const { channelName, userName, about, profilePic, password } = req.body;

        const isExist = await User.findOne({ where: { userName } }); // Correct Sequelize syntax

        if (isExist) {
            return res.status(400).json({ error: "Username already exists. Please try again" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            channelName,
            userName,
            about,
            profilePic,
            password: hashedPassword
        });

        res.status(201).json({ message: "User registered successfully", success: "yes", data: newUser });

    } catch (error) {
        console.error("Error in signUp:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
