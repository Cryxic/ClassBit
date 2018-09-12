'use strict'

const DataTypes = require('sequelize');
const sequelize = require('../db');

module.exports = function () {

    const book = sequelize.define('book', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING
        },
        description: {
            field: 'description',
            type: DataTypes.STRING
        },
        imageLink: {
            field: 'image_link',
            type: DataTypes.STRING
        }
    }, {
            freezeTableName: true,
            timestamps: false

        });

    return book;
}