'use strict'

const Database = use('Database')
const Chat = use('App/Models/Chat')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with messages
 */
class ChatController {
  /**
   * Show a list of all messages.
   * GET messages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new message.
   * GET messages/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new message.
   * POST messages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const id_user_rooms = request.input('id_user_rooms')
    const text = request.input('message')

    const messages = new Chat()
    
    messages.id_user_rooms = id_user_rooms
    messages.message = text

    await messages.save()
    return response.json(messages)
  }

  /**
   * Display a single message.
   * GET messages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ request, response, view, params }) {
    const message = await Chat
    .query()
    .from('users').innerJoin('chats', 'chats.id_user_rooms', 'users.id')
    // .where('users.id', params.id)
    .fetch()
    return response.json({ message })
  }

  /**
   * Render a form to update an existing message.
   * GET messages/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update message details.
   * PUT or PATCH messages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a message with id.
   * DELETE messages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const message = await Chat.find(params.id)

    if (!message) {
      return response.status(404).json({ data: 'Resource not found' })
    }

    await message.delete()

    return response.status(204).json(null)
  }
}

module.exports = ChatController
