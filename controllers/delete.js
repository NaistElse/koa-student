// 删除学生
const db = require('../database')


module.exports = {
  'GET /delete': async(ctx, next) => {
    var sno = ctx.query.sno
    const issuccess = await db.query(`DELETE FROM students WHERE sno = '${sno}'`)

    if(issuccess.affectedRows) {
      return ctx.body = {
        stauts: 1,
        message: '删除成功'
      }
    } else {
      return ctx.body = {
        stauts: 0,
        message: '系统繁忙'
      }
    }
  }
}
