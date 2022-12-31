const connection = require('../app/database.js')

class MomentsService {
  async save({ userId, content }) {
    // 2.拼接statement,预处理语句
    const statement = 'INSERT INTO `moments` (user_id, content) VALUES (?,?);'

    // 3.执行sql语句
    const [result] = await connection.execute(statement, [userId, content])

    return result
  }

  async queryList(size = 10, offset = 0) {
    //OFFSET 从第几条查询
    const statement = `
				SELECT moments.id,moments.content,moments.createAt,moments.updateAt,
				JSON_OBJECT('id',user.id,'name',user.name,'createTime',user.createAt,'updateTime',user.createAt) user
				FROM moments LEFT JOIN user
				ON moments.user_id = user.id LIMIT ? OFFSET ?`

    const [result] = await connection.execute(statement, [String(size), String(offset)])

    return result
  }
	
	async queryById(id) {
		//OFFSET 从第几条查询
		const statement = `
				SELECT moments.id,moments.content,moments.createAt,moments.updateAt,
				JSON_OBJECT('id',user.id,'name',user.name,'createTime',user.createAt,'updateTime',user.createAt) user
				FROM moments LEFT JOIN user
				ON moments.user_id = user.id
				WHERE moments.id = ?
`
		const [result] = await connection.execute(statement, [id])
		
		return result
	}
	async updateById(id,content) {
		//OFFSET 从第几条查询
		const statement = `UPDATE moments SET content = ? WHERE id = ?`
		const [result] = await connection.execute(statement, [content,id])
		
		return result
	}
	async removeById(id) {
		//OFFSET 从第几条查询
		const statement = `DELETE FROM moments WHERE id = ?`
		const [result] = await connection.execute(statement, [id])
		return result
	}
}

module.exports = new MomentsService()
