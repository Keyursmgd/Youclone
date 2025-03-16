const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { 
  const User = sequelize.define("User", {
      channelName: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      userName: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
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
      timestamps: true
  });

  return User;
};
