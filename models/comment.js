

module.exports = (sequelize, DataTypes) => {
    

    const Comm = sequelize.define("Comm", {
        user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "id"
            }
        },
        vid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Videos",
                key: "id"
            }
        },
        mess: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true
    });

    return Comm;
};

