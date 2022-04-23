const HttpException = require('../exceptions/http.exception')
const User = require('../models/user')
const Article = require('../models/article')
const {getSlug }= require('../utils/slug')
const {validateCreateArticle} = require('../utils/validate/article.validate')

//创建文章
module.exports.createArticle = async (req, res, next) => {
    console.log('createArticle');
    try {
        // ● 获取请求内容： title description body  tags
        const { title, description, body } = req.body

        console.log(title, description, body);
        // ● 请求内容验证： 字段验证
        let { error, validate } = validateCreateArticle(title, description, body)
        if (!validate) {
            throw new HttpException(401, '文章创建参数验证失败', error)
        }
        // ● 获取作者信息：token 解签=>email=>author 信息 （只有登录用户的作者才能创建自己的文章）
        const { email } = req.user
        const author = await User.findByPk(email)

        if (!author) {
            throw new HttpException(401, '作者账号不存在', 'author user not found')
        }
        // ● 创建文章
        //     ○ 生成别名
        let slug = getSlug()
        //     ○ 存储数据：文章和作者email
        let article = await Article.create({ // 注意 ： 创建返回值 是 不包含标签关系
            slug,
            title,
            description,
            body,
            UserEmail: author.email
        })

     
      
        //     ○ 文章数据优化返回
        res.status(201)
            .json({
                status: 1,
                message: '文章创建成功',
                data: article.dataValues
            })
    } catch (e) {
        next(e)
    }
}

//获取文章 : 单个文章
module.exports.getArticle = async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
}
//获取文章：关注作者的文章
module.exports.getArticle = async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
}


//获取文章：关注作者的文章
module.exports.getFollowArticle = async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
}

//获取文章：条件（tag,author,limit,offset）获取全局文章
module.exports.getArticles = async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
}

//更新文章
module.exports.updateArticle = async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
}

//删除文章
module.exports.deleteArticle = async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
}