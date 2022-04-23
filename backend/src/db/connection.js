const sequelize = require('./sequelize')

// 数据库链接
const dbConnection = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await sequelize.authenticate();
            console.log(`mysql connect success on ${process.env.DB_PORT}`);
            resolve()
        } catch (error) {
            console.error('mysql connect to the database fail:', error);
            reject(error)
        }
    })

}

module.exports = dbConnection