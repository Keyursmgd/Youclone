const db = require("../models/index");
const User = db.User; // Use the Sequelize model from db
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const cookieOptions = {
    httpOnly: true,
    secure: false,
    sameSite: 'Lax'

};

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

exports.signIn = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ where: { userName } });
        if (user && await bcrypt.compare(password, user.password)) {

            const token = jwt.sign({ userId: user.id }, "Its_My_Secret_key");
            res.cookie('token',token,cookieOptions);
            res.status(201).json({ message: "Logged In Successfully", success: "true",token }); // token to be added in res.status
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }

    } catch (error) {
        console.error("Error in signIn:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.logout = async(req,res)=>{
    res.clearCookie('token', cookieOptions).json({ message: 'Logged out successfully' });
}
