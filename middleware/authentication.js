const jwt = require('jsonwebtoken');
const db = require("../models/index"); 
const User = db.User; // Use the Sequelize model from db



const auth = async(req,res,next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({error: "No token, authorization denied"});
    }else{
        try{
            const decode = jwt.verify(token, "Its_My_Secret_key");
            req.user = await User.findByPk(decode.userId,{
                attributes: {exclude:['password']}
            });
            next(); 
        }catch(error){
            res.status(401).json({error: "Invalid token"});
        }
    }
}

module.exports = auth;