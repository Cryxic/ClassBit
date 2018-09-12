'use strict'

const sequelize = require('../../models/index');
const Book = sequelize.bookOrm;
const User = sequelize.userOrm;
const UserBook = sequelize.bookUserOrm;

class BookDbHelper {
    static getAllBooks() {
        return UserBook.findAll({ include: [{ model: User }, { model: Book }] });
    }
    static getBookById(id) {
        return UserBook.findOne({
            where: { id: id },
            include: [{ model: User }, { model: Book }]
        })
    }
}

module.exports = BookDbHelper;