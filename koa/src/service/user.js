const connection = require('../app/database.js')

class UserService{
	//创建用户
	async save(user){
		const { username, password ,roleId} = user
		const statement = 'INSERT INTO `user` (username, password,roleId) VALUES (?,?,?);'
		const [result] = await connection.execute(statement, [username, password,roleId])
		return result
	}
	
	async update(user){
		const { username, password ,roleId,id} = user
		const statement = 'UPDATE user SET username = ?, password = ?,roleId = ? WHERE id = ?'
		const [result] = await connection.execute(statement, [username, password,roleId,id])
		return result
	}
	
	async findUserName(username){
		const statement = 'SELECT * FROM user WHERE username = ?'
		const [values] = await connection.execute(statement, [username])
		return values
	}
	
	//头像存数据库
	async saveAvatar(filename, url, size, userId) {
		console.log(url)
		const statement = 'INSERT INTO avatar (filename, url, size, user_id) VALUES (?, ?, ?, ?);'
		const [result] = await connection.execute(statement, [filename, url, size, userId])
		return result
	}
	
	
	async queryUserAvatar(userId){
		const statement = `SELECT * FROM avatar WHERE user_id = ?`
		const [result] = await connection.execute(statement,[userId])
		//拿最新的
		return result.pop()
	}
	async queryUser(userId){
		const statement = `SELECT * FROM user WHERE id = ?`
		const [result] = await connection.execute(statement,[userId])
		return result
	}
	async queryUserByRoleId(RoleId){
		const statement = `SELECT * FROM user WHERE roleId = ?`
		const [result] = await connection.execute(statement,[RoleId])
		return result
	}
	async queryUserList(){
		const statement = `SELECT * FROM user`
		const [result] = await connection.execute(statement)
		for (let i = 0,len = result.length;i < len;i ++){
			const [res] = await connection.execute(`SELECT name FROM role WHERE  id = ?`,[result[i].roleId])
			result[i].roleName = res[0].name
		}
		return result
	}
	
	async deleteUser(id){
		const statement = `DELETE FROM user WHERE id = ?`
		const [result] = await connection.execute(statement,[id])
		return result
	}
}


module.exports = new UserService()
