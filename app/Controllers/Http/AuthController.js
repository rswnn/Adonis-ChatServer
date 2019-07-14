'use strict'

const User = use('App/Models/User')

class AuthController {
    async login ({ auth, request, response }) {
        const { email, password } = request.all()
        if(await auth.attempt(email, password)) {
          let user = await User.findBy('email', email)
          let accessToken = await auth.withRefreshToken().generate(user)

          return response.json({success: true, user: user, access_token: accessToken})
        }
        
      }
}

module.exports = AuthController
