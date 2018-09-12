'use strict'

const sequelize = require('../../models/index');
const Book = sequelize.bookOrm;

class BookDbHelper {
    static getAllBooks() {
        return Book.findAll();
    }
}

module.exports = BookDbHelper;