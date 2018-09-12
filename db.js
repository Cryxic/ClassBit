const config = require('config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.get("db.database"), config.get("db.user"), config.get("db.password"), {
    host: config.get("db.host"),
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


module.exports = sequelize;