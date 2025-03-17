const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { 
  const User = sequelize.define("User", {
    // id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true
    // },
      channelName: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true  // Ensure only one UNIQUE constraint
    },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      about: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      profilePic: {
          type: DataTypes.STRING,
          allowNull: false
      },
  }, {
      timestamps: false
  });

  return User;
};
