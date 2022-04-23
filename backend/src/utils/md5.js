//md5加密
const md5 = require('md5')
const SALT = 'salt'//防止密码映射关系解密

const md5Password = (password)=>{
    return new Promise((resolve,reject)=>{
        const md5PWD = md5(password+SALT)
        resolve(md5PWD)
    })
}

const matchPassword = (oldMd5Pwd, password) => {
    return new Promise((resolve, reject) => {
        const newMd5PWD = md5(password + SALT)
        let match = oldMd5Pwd === newMd5PWD ? true : false
        resolve(match)
    })
}

module.exports = { md5Password, matchPassword }

async function test() {
    const pass = 'abc'
    const md5Pwd = await md5Password(pass)
    console.log("md5Pwd:", md5Pwd);
    const match = await matchPassword(md5Pwd, 'abc')
    console.log("Password matches:", match);
}

test()