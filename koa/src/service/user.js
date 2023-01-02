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
	
	//头像存数据库
	async saveAvatar(filename, mimetype, size, userId) {
		const statement = 'INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);';
		const [result] = await connection.execute(statement, [filename, mimetype, size, userId])
		return result
	}
	
	
	async queryUserAvatar(userId){
		const statement = `SELECT * FROM avatar WHERE user_id = ?`
		const [result] = await connection.execute(statement,[userId])
		//拿最新的
		return result.pop()
	}
}


module.exports = new UserService()
