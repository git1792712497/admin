const connection = require('../app/database.js')

class UserService{
	//创建用户
	async save(user){
		// 1.获取用户 user
		const { name, password } = user
		
		// 2.拼接statement,预处理语句
		const statement = 'INSERT INTO `user` (name, password) VALUES (?,?);'
		
		// 3.执行sql语句
		const [result] = await connection.execute(statement, [name, password])
		
		return result
	}
	
	async findUserName(name){
		const statement = 'SELECT * FROM user WHERE name = ?'
		const [values] = await connection.execute(statement, [name])
		return values
	}
}


module.exports = new UserService()
