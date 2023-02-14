// this file contains the models with auto incremented id ie name, and the email

const Sequelize = require ('sequelize');

const db= require('../utils/database')

const User = db.define('user', {

    id: {
        type:Sequalize.INTEGER,
        autoIncrement:true,
        allowNull: False,
        primaryKey:true
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING
});

module.exports = User;