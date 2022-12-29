const connection = require('../app/database.js')

class UserService{
	save(user){
		//执行sql操作
		connection.execute()
	}
}


module.exports = new UserService()
