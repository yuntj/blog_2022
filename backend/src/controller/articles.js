const HttpException = require('../exceptions/http.exception')
const User = require('../models/user')
const Article = require('../models/article')
const Tag = require('../models/tag')
const {getSlug }= require('../utils/slug')
const {validateCreateArticle} = require('../utils/validate/article.validate')
const sequelize = require('../db/sequelize')

//处理文章 代码复用
function handleArticle(article,author){
    //     ○ 标签返回优化
    const newTags = []
    for (const t of article.dataValues.tags) {
        newTags.push(t.name)
    }
    // console.log(newTags);
    article.dataValues.tags = newTags
    //     ○ 作者信息优化
    // console.log(author);
    delete author.dataValues.password
    delete author.dataValues.email
    article.dataValues.author = author

    return article.dataValues
    
}

const handleArticles = async (currentEmail,article) =>{//处理多个文章
    //     ○ 标签返回优化
    const newTags = []
    for (const t of article.dataValues.tags) {
        newTags.push(t.name)
    }
    // console.log(newTags);
    article.dataValues.tags = newTags
    //     ○ 作者信息优化
    let {username,email,bio,avatar} = article.dataValues.user
    let author = {username, email, bio, avatar}

    delete article.dataValues.user
    article.dataValues.author = author

    // 喜欢文章
    // 获取喜欢个数
    const favoriteCount= await article.countUsers()
    if(favoriteCount==0){
        article.dataValues.isFavorite = false
        article.dataValues.favoriteCount = 0
        return article.dataValues
    }

    if(!currentEmail){
        article.dataValues.isFavorite = false
        article.dataValues.favoriteCount = favoriteCount
        return article.dataValues
    }
    // 当前登录用户是否已经喜欢
    // 获取喜欢文章的总人数
    // 获取喜欢文章的人的emails
    // 当前登录用户是否在文章被喜欢的人的emails里面
    //console.log(article.__proto__);//getUsers()
    const allFavoriteUsers = await article.getUsers()
    let allFavoriteUsersEmails = []
    allFavoriteUsers.forEach(user=>{
        allFavoriteUsersEmails.push(user.email)

    })
    let isFavorite = allFavoriteUsersEmails.includes(currentEmail)

    article.dataValues.isFavorite = isFavorite
    article.dataValues.favoriteCount = favoriteCount
    return article.dataValues
   
}

//创建文章
module.exports.createArticle = async (req, res, next) => {
    console.log('createArticle');
    try {
        // ● 获取请求内容： title description body  tags
        const { title, description, body, tags } = req.body.article

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
            userEmail: email,
        })

        // ● 存储文章和标签的关系
        //     ○ 自定义标签 ： 当前作者自己添加的标签=>文章和标签关系存储
        //     ○ 系统自带标签 ： 数据库已经存在的标签 =>文章和标签关系存储
        if (tags) {
            for (const t of tags) {
                let existTag = await Tag.findByPk(t) // 已存在的标签

                let newTag // 新标签
                if (!existTag) {
                    //创建标签
                    newTag = await Tag.create({ name: t })
                    //文章和标签关系 ：taglist 
                    //console.log('article.__propo__:',article.__propo__); //addTag(tag)
                    await article.addTag(newTag)//异步
                } else {
                    //文章和标签关系 ：taglist
                    await article.addTag(existTag)
                }

            }
        }


        // ● 返回文章数据： （文章 / 标签 / 作者） 
        //     ○ 根据slug获取数据（包含文章对应的标签）
        article = await Article.findByPk(slug, { include: Tag })
        console.log(article.dataValues);
        //     ○ 标签返回优化
        //     ○ 作者信息优化
       article = handleArticle(article,author)
        //     ○ 文章数据优化返回
        res.status(201)
            .json({
                status: 1,
                message: '文章创建成功',
                data: article
            })
    } catch (e) {
        next(e)
    }
}

//获取文章 : 单个文章
module.exports.getArticle = async (req, res, next) => {
    try {
        //获取参数：slug
        const {slug} = req.params
        //获取文章：根据slug获取文章以及关联的标签
        let article = await Article.findByPk(slug, { include: Tag })
        // 获取当前文章的作者信息：userEmail
        console.log(article)//getUser
        const author = await article.getUser()
        // 返回数据处理：标签和作者信息 
        article = handleArticle(article,author)
        // 响应数据
        res.status(201)
            .json({
                status: 1,
                message: '文章获取成功',
                data: article
            })
    } catch (e) {
        next(e)
    }
}

//获取文章：关注作者的文章
module.exports.getFollowArticle = async (req, res, next) => {
    try {
        // 获取登录用户：粉丝的email
        const fansEmail= req.user.email
        // 获取登录用户关注的作者：follows关联表
        const query = `SELECT userEmail FROM followers WHERE followerEmail="${fansEmail}"`
        const followAuthors = await sequelize.query(query)
        console.log('followAuthors',followAuthors)
        //     如果没有关注的作者 就没有文章=>[]
        if (followAuthors[0].length==0){
            return res.satus(200).json({
                status:1,
                message:'没有关注的作者，获取的文章为空',
                data:[]
            })
        }
        // 获取作者的email:[email1,emial2,...]
        let followAuthorsEmails = []
        for (const o of followAuthors[0]){
            followAuthorsEmails.push(o.userEmail)
        }
        // 获取作者文章
        //     遍历获取作者email
        //     获取每个作者的所有文章 （注意：每一篇文章包含标签和作者信息）
        let {count,rows} = await Article.findAndCountAll({
            distinct:true,//去重，count和rows相同
            where:{
                userEmail: followAuthorsEmails
            },
            include:[Tag,User]
        })
        //     每一个作者的每一篇文章处理：标签和作者信息
        let articles = []
        for(let t of rows){
            let handleArticle = await handleArticles(fansEmail,t)
            articles.push(handleArticle)
        }
        // 相应数据
        return res.status(201)
            .json({
                status: 1,
                message: '文章获取成功',
                data: {articles,articlesCount:count}
            })
    } catch (e) {
        next(e)
    }
}

//获取文章：条件（tag,author,limit,offset）获取全局文章
module.exports.getArticles = async (req, res, next) => {
    try {
        //当前登录用户email
        const email = req.user ? req.user.email:null
        // 获取条件参数：tag, author, limit, offset
        const {tag,author,limit = 20,offset=0} = req.query
        // 获取文章
        let result ;
        if (tag && !author) {//     有标签没作者+分页数据
            result = await Article.findAndCountAll({
                distinct:true,
                include:[{
                    model:Tag,
                    attributes:['name'],
                    where:{name:tag}
                },{
                    model:User,
                    attributes:['email','username','bio','avatar']
                }],
                limit:parseInt(limit),
                offset: parseInt(offset)
            })


        } else if (!tag && author){//     有作者没标签+分页数据
            result = await Article.findAndCountAll({
                distinct: true,
                include: [{
                    model: Tag,
                    attributes: ['name'],
                }, {
                    model: User,
                    attributes: ['email', 'username', 'bio', 'avatar'],
                    where: { username: author }
                }],
                limit: parseInt(limit),
                offset: parseInt(offset)
            })

        } else if (tag && author) {//     有作者和标签+分页数据
            result = await Article.findAndCountAll({
                distinct: true,
                include: [{
                    model: Tag,
                    attributes: ['name'],
                    where: { name: tag }
                }, {
                    model: User,
                    attributes: ['email', 'username', 'bio', 'avatar'],
                    where: { username: author }
                }],
                limit: parseInt(limit),
                offset: parseInt(offset)
            })

        } else {//     没有作者和标签+分页数据
            result = await Article.findAndCountAll({
                distinct: true,
                include: [{
                    model: Tag,
                    attributes: ['name']
                }, {
                    model: User,
                    attributes: ['email', 'username', 'bio', 'avatar']
                }],
                limit: parseInt(limit),
                offset: parseInt(offset)
            })
        }
        const {count,rows} = result

        // 文章数据处理
        //     遍历获取文章 处理标签和文章信息
        let articles = []
        for(const t of rows){
            let handleArticle = await handleArticles(email,t)
            articles.push(handleArticle)
        }
        // 响应数据
        return res.status(201)
            .json({
                status: 1,
                message: '条件查询文章获取成功',
                data: {articles,articlesCount:count}


            })

    } catch (e) {
        next(e)
    }
}

//更新文章
module.exports.updateArticle = async (req, res, next) => {
    try {
        // 中间件登录验证
        // 获取参数：slug（params)
        const { slug } = req.params
        // 获取更新内容：title description body
        const data = req.body
        // 获取更新文章:根据slug获取需要的更新的文章 包括标签
        let article = await Article.findByPk(slug, { include: Tag })
        // 修改文章权限验证：只有当前登录用户 是当前文章作者 才能修改
        const loginUser = await User.findByPk(req.user.email)
        if(!loginUser){
            throw new HttpException(401,'登录账号不存在','user not found')
        }
        const authorEmail = article.userEmail
        if (!authorEmail) {
            throw new HttpException(403, '只有作者账号才能有修改权限', 'only author can update the article')
        }
        // 修改字段准备
        const title = data.title ? data.title:article.title
        const description = data.description ? data.description : article.description
        const body = data.body ? data.body : article.body
        // 更新数据操作
        const updateArticle = await article.update({title,description,body})
        console.log('updateArticle',updateArticle)
        // 返回数据处理：标签和作者信息
        article = handleArticle(updateArticle,loginUser)
        // 响应数据
        res.status(200)
            .json({
                status: 1,
                message: '文章更新成功',
                data: article
            })


    } catch (e) {
        next(e)
    }
}

//删除文章
module.exports.deleteArticle = async (req, res, next) => {
    try {
        // 获取文章：slug
        const { slug } = req.params
        // 获取文章：根据slug获取文章及关联的标签
        let article = await Article.findByPk(slug, { include: Tag })
        //     文章不存在直接抛出异常
        if (!article) {
            throw new HttpException(404, '文章不存在', 'article not found')
        }
        // 获取当前用户信息
        const {email} = req.user
        const user = await User.findByPk(email)
        const authorEmail = article.userEmail
        //     验证当前登录用户是否是作者
        //         否 直接抛出异常 new HttpException
        if (email!==authorEmail) {
            throw new HttpException(403, '只有作者有删除权限', 'only author can delete the article')
        }
        //         是 可以删除文章（只有作者可以删除自己的文章）
        //          删除文章：slug 
        await article.destroy({where:{slug}})
        // 相应数据
        res.status(200)
            .json({
                status: 1,
                message: '文章删除成功'
            })

    } catch (e) {
        next(e)
    }
}