// 添加学生信息
const db = require('../database')


module.exports = {
  'POST /addstudent': async(ctx, next) => {
    var
        sno = ctx.request.body.sno,
        sname = ctx.request.body.sname,
        ssex = ctx.request.body.ssex,
        sclass = ctx.request.body.sclass,
        sdept_id = parseInt(ctx.request.body.sdept_id),
        spwd = parseInt(ctx.request.body.spwd)

    if(sno == '' || sname == '' || ssex == '' || sclass == '' || sdept_id == '' || spwd == '') {
      return ctx.body = {
        stauts: 0,
        message: '请填写完整'
      }
    }

    const issuccess =  await db.query(`INSERT INTO students VALUES('${sno}', '${sname}', '${ssex}', '${sclass}', ${sdept_id}, ${spwd})`)
    if(issuccess.affectedRows) {
      return ctx.body = {
        stauts: 1,
        message: '添加成功'
      }
    }
  }
}
