const Sequelize = require('sequelize');
const sequelize = require('../db/database');

const message = sequelize.define('message', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = message;