let bcrypt = require('bcryptjs')
const SALT_ROUNDS = 10
const hashPassword =(password)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.hash(password,SALT_ROUNDS,(err,encrypted)=>{
            if(err)
                reject(err)
            resolve(encrypted)
        })
    })
}

const bcryptPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, SALT_ROUNDS, (err, encrypted) => {
            if (err)
                return reject(err)
            resolve(encrypted)
        })
    })
}

//密码对比
const matchPassword = (oldHashPwd, password) => {
    return new Promise(async (resolve, reject) => {
        const match = await bcrypt.compare(password, oldHashPwd)
        resolve(match)
    })
}

module.exports = { hashPassword,bcryptPassword,matchPassword}

//测试
async function test() {
    const pass = 'abc'
    const bcryptPWD = await bcryptPassword(pass)
    console.log("bcryptPWD:", bcryptPWD);
    const match = await matchPassword(bcryptPWD, 'abc')
    console.log("password matches:", match);
}

test()