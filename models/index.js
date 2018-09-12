const Sequelize = require('../db');
const testOrm = require('./test')();
const userOrm = require('./user')();
const bookOrm = require('./book')();
const bookUserOrm = require('./book_user')();


bookOrm.belongsToMany(userOrm, {through: bookUserOrm, foreignKey: 'user_id', as: 'user'});
userOrm.belongsToMany(bookOrm, {through: bookUserOrm, foreignKey: 'book_id', as: 'book'});

bookUserOrm.belongsTo(bookOrm, {foreignKey: 'book_id', targetKey: 'id'});
bookUserOrm.belongsTo(userOrm, {foreignKey: 'user_id', targetKey: 'id'});

module.exports = {
    Sequelize: Sequelize,
    testOrm: testOrm,
    userOrm: userOrm,
    bookOrm: bookOrm,
    bookUserOrm: bookUserOrm
}