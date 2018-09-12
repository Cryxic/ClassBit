'use strict'

const DataTypes = require('sequelize');
const sequelize = require('../db');

module.exports = function () {

    const test = sequelize.define('user', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        hash: {
            field: 'hash',
            type: DataTypes.STRING
        },
        salt: {
            field: 'salt',
            type: DataTypes.STRING
        },
        username: {
            field: 'username',
            type: DataTypes.STRING
        }
    }, {
            freezeTableName: true,
            timestamps: false

        });

    return test;
}