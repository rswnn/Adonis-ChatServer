'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Room extends Model {

    users() {
        return this.belongsToMany('App/Models/User').pivotTable('user_rooms')
    }
}

module.exports = Room
