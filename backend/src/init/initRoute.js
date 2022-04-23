const userRoute = require('../routes/users')
const followRouter = require('../routes/follow')
const tagRouter = require('../routes/tags')

const initRoute = (app) => {
    // app.get('/', (req, res) => {
    //     res.json({ status: "API is running" });
    // })

    //路由模块化
    app.use('/api/v1/users', userRoute)
    app.use('/api/v1/follow', followRouter)
    app.use('/api/v1/tags', tagRouter)
}

module.exports = initRoute