// 数据列表主页
const db = require('../database')


const everypage_size = 5 // 每页所展示的学生数
var total_page = 0


module.exports = {
  'GET /list': async(ctx, next) => {
    if(!ctx.session.account) {
      return ctx.redirect('/')
    }

    var
        sname = ctx.query.sname || '',
        page = ctx.query.page ? parseInt(ctx.query.page) : 1,
        where = '1 = 1',
        search = ''


    page = page < 1 ? 1 : page




    if(ctx.query.category && ctx.query.category !== '0') {
      where +=' and students.sdept_id = ' + ctx.query.category
      search +='&category=' + ctx.query.category
    }


    const specialtycategory = await db.query('select * from specialty')

    // 总的学生
    const total_students = await db.query(`SELECT COUNT(1) AS count FROM students
                                           INNER JOIN specialty ON students.sdept_id = specialty.id
                                           where ${where}`)


    total_pages = parseInt(Math.ceil(total_students[0].count / everypage_size)) // 总的页数

    page = page > total_pages ? total_pages : page

    var offset = (page - 1) * everypage_size


    if(sname) {
      const findstudent = await db.query(`SELECT students.sno, students.sname,
                                          students.ssex, students.sclass, students.spwd,
                                          students.sdept_id, specialty.category FROM students
                                          INNER JOIN specialty ON students.sdept_id = specialty.id
                                          where sname =  '${sname}'`)

      return ctx.render('list', {
        students: findstudent,
        specialtycategory,
        stauts: findstudent == '' ? 1 : 0,
        pagination: 0
      })
    }

    const students = await db.query(`SELECT students.sno, students.sname,
                                     students.ssex, students.sclass, students.spwd,
                                     students.sdept_id, specialty.category FROM students
                                     INNER JOIN specialty ON students.sdept_id = specialty.id
                                     WHERE ${where}
                                     LIMIT ${offset}, ${everypage_size}`)


     // 分页处理逻辑
     var visiable = 5

     var begin = page - (visiable -1 ) / 2
     var end = begin + visiable - 1

     begin = begin < 1 ? 1 : begin
     end = begin + visiable - 1
     end = end > total_pages ? total_pages : end
     begin = end - visiable + 1
     begin = begin < 1 ? 1 : begin


     var pagination = {
        begin,
        page,
        end,
        total_pages,
        search
    }


    await ctx.render('list', {
      students,
      specialtycategory,
      pagination,
      query: ctx.query
    })

  }
}
