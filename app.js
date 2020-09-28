const Koa = require('koa')
const path = require('path')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
//const templating = require('./templating')
const nunjucks = require('koa-nunjucks-2')
const controller = require('./controller')

const app = new Koa()


// 初始化模板引擎
// app.use(templating('views', {
//
// }))

app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'),  // 指定视图目录
  nunjucksConfig: {
    trimBlocks: true,                   // 开启转义 防Xss
    noCache: true,
    watch: true
  }
}))


// 处理静态文件
let staticFiles = require('./static-files')
app.use(staticFiles('/node_modules/', __dirname + '/node_modules'))
app.use(staticFiles('/public/', __dirname + '/public'))

// 处理POST请求
app.use(bodyParser())


// 处理session
app.keys = ['jungjingyi']; //cookie签名
const CONFIG = {
  key: 'koa:sess',  //默认
  maxAge: 86400000, //[需要设置]
  overwrite: true,  //覆盖，无效
  httpOnly: true,
  signed: true,     //签名，默认true
  rolling: false,   //每次请求强制设置session
  renew: true,      //快过期的时候的请求设置session[需要设置]
}
app.use(session(CONFIG, app))


app.use(controller())

app.listen(3000, () => {
  console.log('Server running at 3000...')
})
