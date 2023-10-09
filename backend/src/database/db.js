const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL, "postgres", process.env.DB_PASS, {
    dialect: "postgres",
    host: "localhost"
}) 

module.exports = sequelize;