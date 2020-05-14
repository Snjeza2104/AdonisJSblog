'use strict'

class UserController {

  async login ({ request, auth }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
  }

  show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }
    return auth.user
  }

  await auth.attempt(uid, password)
  const user = await User.find(1)

	await auth.login(user)
	await auth.loginViaId(1)

	await auth.remember(true).attempt(email, password)

	try {
 	 await auth.check()
	} catch (error) {
  	response.send('You are not logged in')
	}
	try {
  	return await auth.getUser()
	} catch (error) {
  	response.send('You are not logged in')
	}	
	await auth.logout()

	try {
  	await auth.check()
	} catch (error) {
  	response.send(error.message)
	}
	try {
  return await auth.getUser()
} catch (error) {
  response.send('Credentials missing')
}


	}

module.exports = UserController
