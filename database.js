const mysql = require('mysql')


function __connection(){

    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root123456',
      database: 'STD'
    })
    connection.connect()
    return connection
}

exports.query=function(sql, parmas=null){
    //1.获取数据库连接对象
    var connection = __connection()
    return new Promise(function(reject,resolve){

    //2执行sql语句
    connection.query(sql, parmas, function (error, results, fields) {
        if (error) throw error
        reject(results)

    })
    //3关闭连接
    connection.end()
  })
}
