const { Sequelize } = require('sequelize');
const path = require('path');

const databasePath = path.resolve(__dirname, '../../database/database.sqlite');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: databasePath,
});

module.exports = sequelize;