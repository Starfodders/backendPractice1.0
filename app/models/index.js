const dbConfig = require("../config/db.config"); //requires the exported key-values from config js
const Sequelize = require("sequelize"); //requires our npm i sequelize

//constructor 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.max,
        min: dbConfig.min,
        acquire: dbConfig.acquire,
        idle: dbConfig.idle
    }
});
//empty object thats filled with constructor elements and exports it
const db = {};
db.Sequelize = Sequelize; //whats this syntax idk?
db.sequelize = sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize); //imports framework 
module.exports = db;

