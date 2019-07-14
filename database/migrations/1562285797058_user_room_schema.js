'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class User_room extends Schema {
  up () {
    this.create('user_rooms', (table) => {
      table.increments()
      table.integer('id_room').unsigned().references('id').inTable('rooms')
      table.integer('id_user').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_rooms')
  }
}

module.exports = User_room
