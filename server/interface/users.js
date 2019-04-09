import Router from 'koa-router'

let router = new Router()

router.get('/register',async function(ctx,next){  // 注册接口
    ctx.response.body = '请求了注册接口'
    console.log('新用户注册');
    next()
})

module.exports = router