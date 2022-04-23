const dbConnection = require('../db/connection');
const sequelize = require('../db/sequelize')

const User = require('../models/user')
const Article = require('../models/article')
const Tag = require('../models/tag')
const Comment = require('../models/comment')

const initRelition = () => {
    //用户-文章：一对多
    User.hasMany(Article, {
        onDelete: "CASCADE", // CASCADE 小瀑布 ，当删除用户时候 关联的文章 也会删除
    });
    Article.belongsTo(User);

    //文章-标签：多对多
    Article.belongsToMany(Tag, {
        through: "TagList",
        uniqueKey: false,
        timestamps: false,
    });
    Tag.belongsToMany(Article, {
        through: "TagList",
        uniqueKey: false,
        timestamps: false,
    });

    //文章-评论：一对多
    Article.hasMany(Comment, { onDelete: "CASCADE" });
    Comment.belongsTo(Article);

    //用户-评论：一对多
    //一个用户可以有多个评论
    //一个评论属于某个用户
    User.hasMany(Comment, { onDelete: "CASCADE" });
    Comment.belongsTo(User);

    //用户-用户 关注：多对多
    //一个用户可以关注多个用户
    //一个用户可以被多个用户关注
    User.belongsToMany(User, {
        through: "Followers",
        as: "followers",
        timestamps: false,
    });

    //用户 - 文章 （喜欢）：多对多
    User.belongsToMany(Article, { through: "Favourites", timestamps: false });
    Article.belongsToMany(User, { through: "Favourites", timestamps: false });
};



const initDB = () => {
    return new Promise(async (resolve, reject) => {
        try {
            //连接数据库
            await dbConnection();

            // 初始化model关系
            initRelition()

            //自动同步所有模型
            await sequelize.sync({ alter: true });

            resolve()
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })
};

module.exports = initDB;
