'use strict'

const DataTypes = require('sequelize');
const sequelize = require('../db');

module.exports = function () {

    const bookUser = sequelize.define('book_user', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        bookId: {
            field: 'book_id',
            type: DataTypes.INTEGER
        },
        userId: {
            field: 'user_id',
            type: DataTypes.INTEGER
        },
        price: {
            field: 'price',
            type: DataTypes.NUMERIC
        },
        description: {
            field: 'description',
            type: DataTypes.STRING
        }
    }, {
            freezeTableName: true,
            timestamps: false

        });

    return bookUser;
}