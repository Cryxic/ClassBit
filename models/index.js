const Sequelize = require('../db');
const testOrm = require('./test')();
const userOrm = require('./user')();
const bookOrm = require('./book')();

module.exports = {
    Sequelize:  Sequelize,
    testOrm: testOrm,   
    userOrm: userOrm,
    bookOrm: bookOrm
}