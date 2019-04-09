const Koa = require('koa')
const Router = require('koa-router') //【1】引入路由模块
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()
// import users from './interface/users'
const router = new Router() //【2】生成路有对象
router.get('/register',(ctx,next)=>{ //【3】挂载路由接口
    ctx.response.body = '请求了注册接口'
    console.log('新用户注册');
    // next()
})
app.use(router.routes()).use(router.allowedMethods()); //【4】为app对象挂载路由中间件

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })


  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
