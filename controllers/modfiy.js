// 修改学生信息
const db = require('../database')


module.exports = {
  'GET /modfiy': async(ctx, next) => {
    var sno = ctx.query.sno || ''
    const modfiystudent = await db.query(`select * from students where sno = '${sno}'`)
    ctx.body = {
      modfiystudent
    }
  },
  'POST /modfiy': async(ctx, next) => {
    var
        sno = ctx.request.body.sno,
        sname = ctx.request.body.sname,
        ssex = ctx.request.body.ssex,
        sclass = ctx.request.body.sclass,
        sdept_id = parseInt(ctx.request.body.sdept_id),
        spwd = ctx.request.body.spwd,
        reg = /^[0-9]\d*$/

    if(sno == '' || sname == '' || ssex == '' || sclass == '' || sdept_id == '' || !reg.test(spwd)) {
      return ctx.body = {
        stauts: 0,
        message: '请填写完整(密码为数字)'
      }
    }

    const issuccess =  await db.query(`UPDATE students SET sname = '${sname}', ssex = '${ssex}', sclass = '${sclass}', sdept_id = ${sdept_id}, spwd = ${spwd} where sno = '${sno}'`)
    if(issuccess.affectedRows) {
      return ctx.body = {
        stauts: 1,
        message: '修改成功'
      }
    }
  }
}
