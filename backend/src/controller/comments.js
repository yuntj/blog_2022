const HttpException = require("../exceptions/http.exception");
const Article = require("../models/article");
const User = require("../models/user");
const Comment = require("../models/comment");

//创建评论
module.exports.createComment = async (req, res, next) => {
    try {
        // 获取参数
        //     文章slug
        const { slug } = req.params
        //     评论内容
        const {body} = req.body.comment
        // 接口参数验证
        // 获取文章
        //     校验：文章是否存在
        const article = await Article.findByPk(slug)
        if(!article){
            throw new HttpException(404,'评论文章不存在','article not found')
        }
        // 获取评论用户
        //     校验是否存在
        const user = await User.findByPk(req.user.email)
        if (!user) {
            throw new HttpException(404, '评论用户不存在', 'comment user not found')
        }
        // 创建评论：存储评论内容
        let newComment = await Comment.create({body})
        // 创建关系：
        //     登录用户和评论关系：存储
        await user.addComments(newComment)
        //     评论的文章和评论的关系：存储
        await article.addComments(newComment)
        // 优化返回信息：评论里面追加评论人和文章信息
        newComment.dataValues.user = {
            username:user.dataValues.username,
            bio:user.dataValues.bio,
            avatar: user.dataValues.avatar,
        }
        // 相应数据
        res.status(201).json({
            status:1,
            message:"创建评论成功",
            data:newComment
        })
    }
    catch (error) {
        next(error)
    }
};

//获取评论列表
module.exports.getComments = async (req, res, next) => {
    try {
        // 获取参数
        //     文章slug
        const { slug } = req.params
        // 获取文章
        //     校验是否存在
        const article = await Article.findByPk(slug)
        if (!article) {
            throw new HttpException(404, '获取评论文章不存在', 'article not found')
        }
        // 获取文章评论
        //     条件查询：articleSlug = slug
        //     包含评论人的信息
        const comments = await Comment.findAll({
            where:{
                articleSlug :slug
            },
            include:[{
                model:User,
                attributes:['username','bio','avatar']
            }]
        })
        // 响应信息
        res.status(200).json({
            status: 1,
            message: "获取评论成功",
            data: comments
        })

    }
    catch (error) {
        next(error)
    }
};

//删除某条评论
module.exports.deleteComment = async (req, res, next) => {
    try {
        // 获取文章
        //     文章：slug
        //     评论：id
        const { slug ,id} = req.params
        // 获取文章
        //     校验是否存在
        const article = await Article.findByPk(slug)
        if (!article) {
            throw new HttpException(404, '要删除评论文章不存在', 'article not found')
        }
        // 获取评论
        //     校验是否存在
        const comment = await Comment.findByPk(id)
        if (!comment) {
            throw new HttpException(404, '评论不存在', 'comment not found')
        }
        // 业务验证
        //     当前登录用户 是否是当前准备删除评论的评论人
        //     （未实现 文章的作者可以删除）
        if(req.user.email!==comment.userEmail){
            throw new HttpException(404,'当前登录用户没有删除评论权力','no authorization')
        }
        // 删除操作
        await Comment.destroy({where:{id}})
        // 响应数据
        res.status(200).json({
            status: 1,
            message: "删除评论成功"
        })




    }
    catch (error) {
        next(error)
    }
};