// 数据列表主页
const db = require('../database')

// var students = [
//   {
//     'sno': '02222',
//     'sname': '张三'
//   },
//   {
//     'sno': '02223',
//     'sname': '张三3'
//   },
//   {
//     'sno': '02224',
//     'sname': '张三4'
//   },
//   {
//     'sno': '02225',
//     'sname': '张三4'
//   }
// ]

module.exports = {
  'GET /list': async(ctx, next) => {
    if(!ctx.session.account) {
      return ctx.redirect('/')
    }

    var
        sname = ctx.query.sname || ''

    const specialtycategory = await db.query('select * from specialty')

    if(sname) {
      const findstudent = await db.query(`SELECT students.sno, students.sname, students.ssex, students.sclass, students.spwd, students.sdept_id, specialty.category FROM students INNER JOIN specialty ON students.sdept_id = specialty.id where sname =  '${sname}'`)    
      return ctx.render('list', {
        students: findstudent,
        specialtycategory,
        stauts: findstudent == '' ? 1 : 0
      })
    }

    const students = await db.query('SELECT students.sno, students.sname, students.ssex, students.sclass, students.spwd, students.sdept_id, specialty.category FROM students INNER JOIN specialty ON students.sdept_id = specialty.id')
    await ctx.render('list', {
      students,
      specialtycategory
    })

  }
}
