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
        spwd = ctx.request.body.spwd,
        reg = /^[0-9]\d*$/


    if(sno == '' || sname == '' || ssex == '' || sclass == '' || sdept_id == '' || !reg.test(spwd)) {
      return ctx.body = {
        stauts: 0,
        message: '请填写完整(密码为数字)'
      }
    }

    const isexists = await db.query(`select COUNT(1) AS count from students where sno = '${sno}'`)

    if(isexists[0].count == 1) {
      return ctx.body = {
        stauts: 0,
        message: '有此学号'
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
