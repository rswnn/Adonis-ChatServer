'use strict'

 const User_room = use('App/Models/User_room')
class User_roomController {
  async index ({ request, response, params }) {
  
  }

  async create ({ request, response, view }) {



  }

  async store ({ request, response }) {



  }

  async show ({ params, request, response, view }) {

    const room = await User_room
                 .query()
                 .innerJoin('rooms', 'user_rooms.id_room', 'rooms.id')
                 .where('user_rooms.id_user', params.id)
                 .fetch()
    return response.json({room})
  }

  async edit ({ params, request, response, view }) {



  }

  async update ({ params, request, response }) {



  }
  async destroy ({ params, request, response }) {



  }
}

module.exports = User_roomController
