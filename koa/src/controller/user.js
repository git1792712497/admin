const userService = require('../service/user.js')

class UserController {
	constructor() {
	}
	
	createUser(ctx,next){
		userService.save()
	}
	
}


module.exports = new UserController()
