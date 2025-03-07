const { type } = require("express/lib/response");
const { sequelize,DataTypes } = require("sequelize");

const User = require("./user")

const video = sequelize.define(
    "video",
    {
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: User,
                key: "id"
            }
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING
        },
        videoLink: {
            type: DataTypes.STRING,
            allowNull: false
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        videoType: {
            type: DataTypes.STRING,
            defaultValue: "All",
        },
        like: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        dislike: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    },
    {
        timestamps: true,
    }
);

User.hasMany(video, { foreignKey: "userID" });
video.belongsTo(User, { foreignKey: "userID" });

module.exports = video;