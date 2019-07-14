'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User_room extends Model {

    rooms() {
        return this.belongsTo('App/Models/Room')
    }

    users() {
        return this.belongsTo('App/Models/User')
    }

    chats() {
        return this.hasMany('App/Models/Chat')
    }
    
}

module.exports = User_room
