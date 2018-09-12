'use strict'

const sequelize = require('../../models/index');
const userOrm = sequelize.userOrm;

class UserDbHelper {

    static async getUserHashAndSaltByUserId(userId) {
        const user = await userOrm.findOne({where: {id: userId}});
        return {
            hash: user.hash,
            salt: user.salt
        }
    }
}

module.exports = UserDbHelper;