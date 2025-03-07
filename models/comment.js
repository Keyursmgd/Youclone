const { type } = require("express/lib/response");
const { sequelize,DataTypes } = require("sequelize");

const User = require("./user")
const video = require("./video")

const comm = sequelize.define(
    "comm",
    {
        user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: User,
                key: "id"
            }
        },
        vid:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: video,
                key: "id"
            }
        },
        mess:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true,
    }
);


module.exports = comm;