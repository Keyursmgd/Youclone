

module.exports = (sequelize, DataTypes) => {
    const User = require("./user")(sequelize, DataTypes);
    const Video = require("./video")(sequelize, DataTypes);

    const Comm = sequelize.define("Comm", {
        user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id"
            }
        },
        vid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Video,
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

