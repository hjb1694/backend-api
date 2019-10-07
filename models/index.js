const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

const sequelize = new Sequelize(
    config.db.db_name, 
    config.db.db_user, 
    config.db.db_pass, 
    config.db.db_options
);

fs.readdirSync(__dirname)
.filter(file => file !== 'index.js')
.forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;