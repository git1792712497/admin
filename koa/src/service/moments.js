const connection = require('../app/database.js')

class MomentsService {
  async save({ userId, content }) {
    // 2.拼接statement,预处理语句
    const statement = 'INSERT INTO `moments` (user_id, content) VALUES (?,?);'

    // 3.执行sql语句
    const [result] = await connection.execute(statement, [userId, content])

    return result
  }
	//查询动态下的用户评论数
  async queryList(size = 10, offset = 0) {
    const statement = `
				SELECT moments.id,moments.content,moments.createAt,moments.updateAt,
				JSON_OBJECT('id',user.id,'name',user.name,'createTime',user.createAt,'updateTime',user.createAt) user,
				(SELECT COUNT(*) FROM comment WHERE moment_id = moments.id) commentCount,
				(SELECT COUNT(*) FROM moment_label WHERE moment_id = moments.id) labelCount
				FROM moments LEFT JOIN user
				ON moments.user_id = user.id LIMIT ? OFFSET ?`

    const [result] = await connection.execute(statement, [String(size), String(offset)])

    return result
  }
	//动态详情
	async queryById(id) {
		//查询动态
		const statement1 = `
				SELECT moments.id,moments.content,moments.createAt,moments.updateAt,
				JSON_OBJECT('id',user.id,'name',user.name,'createTime',user.createAt,'updateTime',user.createAt) user
				FROM moments LEFT JOIN user
				ON moments.user_id = user.id
				WHERE moments.id = ?`
		//动态下的评论
		const statement2 = `SELECT
		comment.id,comment.content,comment.moment_id,comment.comment_id,comment.createAt,comment.updateAt,user.name
		 FROM comment LEFT JOIN user ON user.id = comment.user_id WHERE moment_id = ?`
		//动态下的标签
		const statement3 = `SELECT label.name FROM moment_label LEFT JOIN label ON label.id = label_id WHERE moment_id = ?`
		
		const [result1] = await connection.execute(statement1, [id])
		const [result2] = await connection.execute(statement2, [id])
		const [result3] = await connection.execute(statement3, [id])
		result1[0].commentList = result2
		result1[0].labels = result3
		return result1[0]
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
