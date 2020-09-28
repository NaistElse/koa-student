// 登录


module.exports = {
  'POST /login': async(ctx, next) => {
    var account = ctx.request.body.account
    var password = ctx.request.body.password
    if(account == 'admin' && password == '123') {
      ctx.session.account = account
      ctx.session.password = password
      ctx.redirect('/list')
    } else {
      ctx.redirect('/')
    }
  }
}
