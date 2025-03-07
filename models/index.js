'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const DataTypes = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const User = require("./user")(Sequelize, DataTypes);
const Video = require("./video")(Sequelize, DataTypes);
const Comment = require("./comment")(Sequelize, DataTypes);

const db = {sequelize, Sequelize, User, Video, Comment};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

User.hasMany(Video, { foreignKey: "userID" });
Video.belongsTo(User, { foreignKey: "userID" });

User.hasMany(Comment, { foreignKey: "user" });
Video.hasMany(Comment, { foreignKey: "vid" });
Comment.belongsTo(User, { foreignKey: "user" });
Comment.belongsTo(Video, { foreignKey: "vid" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.sync({ alter: true })
    .then(() => console.log("Database & tables created!"))
    .catch(err => console.error("Sync error:", err));

module.exports = db;
