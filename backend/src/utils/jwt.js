//加签
require('dotenv').config({ path: '../../.env' })
const jwt = require('jsonwebtoken')

//加签 =》token
const sign = async (username, email) => {
    return new Promise((resolve, reject) => {
        jwt.sign({
            username,
            email
        }, process.env.JWT_SECRET, (err, token) => {
            console.log(token);
            if (err) {
                console.log(err);
                return reject(err)
            }
            resolve(token)
        })
    })
}

//解签
const decode = async (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            return resolve(decoded);
        });
    });
};

module.exports = { sign, decode }

//TEST
const test = async () => {
    const data = {
        username: 'admin',
        email: 'admin@qq.com'
    }
    const { username, email } = data
    const token = await sign(username, email)
    console.log("token is:", token);
    const decoded = await decode(token) // iat : 发布时间
    console.log("DEcoded:", decoded);
}

test()