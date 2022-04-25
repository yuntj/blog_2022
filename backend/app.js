require('dotenv').config({ path: '.env' })
const initDB = require('./src/init/initDB')
const initServer = require('./src/init/initServer')
const initRoute = require('./src/init/initRoute')

const cors = require('cors')
const morgan = require('morgan')

const noMatchMiddleware = require('./src/middleware/404.middleware')
const errorMiddleware = require('./src/middleware/error.middleware')

const express = require('express')
const app = express()

//中间件
app.use(cors({ credentials: true, origin: true }))//跨域
app.use(express.json())//解析
app.use(morgan('tiny'))//http请求日志

//静态服务
app.use('/static',express.static('public'))

//路由初始化
initRoute(app)

//404
app.use(noMatchMiddleware)
//error
app.use(errorMiddleware)

//统一错误处理
const main = async () => {
    await initDB()
    await initServer(app)
}

main()