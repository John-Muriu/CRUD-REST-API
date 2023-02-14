// This file contain internal configutrations to allow connection between the NodeJs and 
// running Postgres instance


const Sequelize= require('sequelize');

const sequelize = new Sequelize(
    process.env.PG_DB,
    process.env.Pg_USER,
    process.env.PG_PASSWORD,
    {
        host: process.env.PG_HOST,
        dialect: 'postgres',
    }
);

module.exports = sequelize;