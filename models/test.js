'use strict'

const DataTypes = require('sequelize');
const sequelize = require('../db');

module.exports = function () {

    const test = sequelize.define('test_table', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING
        }
    }, {
            freezeTableName: true,
            timestamps: false

        });

    return test;
}