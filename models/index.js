'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {};

// Load all models dynamically
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

// Associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Define relationships
db.User.hasMany(db.video, { foreignKey: "userID" });
db.video.belongsTo(db.User, { foreignKey: "userID" });

db.User.hasMany(db.Comm, { foreignKey: "user" });
db.video.hasMany(db.Comm, { foreignKey: "vid" });
db.Comm.belongsTo(db.User, { foreignKey: "user" });
db.Comm.belongsTo(db.video, { foreignKey: "vid" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.sync({ alter: true })
    .then(() => console.log("Database & tables created!"))
    .catch(err => console.error("Sync error:", err));

module.exports = db;
