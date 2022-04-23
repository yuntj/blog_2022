const validator = require('validator')

//验证：创建用户
module.exports.validateCreateUser = (username, password, email) => {
    let error = {}//错误对象

    if (validator.isEmpty(username)) {
        error.username = '用户名不能为空'
    }
    if (validator.isEmpty(password)) {
        error.password = '密码不能为空'
    }
    if (validator.isEmpty(email)) {
        error.email = '邮箱不能为空'
    }

    if (!validator.isEmpty(email) && !validator.isEmail(email)) {
        error.email = '邮箱格式不对'
    }

    let validate = Object.keys(error).length < 1  // true 验证通过，false : 验证失败

    return { error, validate }

}

//验证：用户注册
module.exports.validateUserLogin = (email, password) => {
    let error = {}//错误对象
    if (validator.isEmpty(password)) {
        error.password = '密码不能为空'
    }
    if (validator.isEmpty(email)) {
        error.email = '邮箱不能为空'
    }
    if (!validator.isEmpty(email) && !validator.isEmail(email)) {
        error.email = '邮箱格式不对'
    }

    let validate = Object.keys(error).length < 1  // true 验证通过，false : 验证失败

    return { error, validate }

}