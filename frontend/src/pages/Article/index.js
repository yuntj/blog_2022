import { PureComponent } from 'react'
import {marked} from 'marked'
import ArticleHeader from './ArticleHeader'
import CommentContainer from './Comments/index'

const currentUser = {
    username: 'test1',
    avatar: '//yuntj.github.io/static/avatar_default.jpg',
    bio: 'user info'
}

// const currentUser =null


const article = {
    "slug": "1371cdf8",
    "title": "你好hello",
    "description": "hello desc",
    "body": "# hello 这是body ```js```",
    "createdAt": "2022-01-20T05:28:57.000Z",
    "updatedAt": "2022-01-20T05:28:57.000Z",
    "userEmail": "lisi@qq.com",
    "tags": [
        "html",
        "tag1"
    ],
    "author": {
        "username": "lisi",
        "avatar": null,
        "bio": null,
        "createdAt": "2022-01-12T10:08:43.000Z",
        "updatedAt": "2022-01-12T10:08:43.000Z"
    }
}

const comments = [
    {
        "id": 4,
        "body": "comment body 2 ",
        "createdAt": "2022-01-22T11:14:58.000Z",
        "updatedAt": "2022-01-22T11:14:58.000Z",
        "userEmail": "zhangsan@qq.com",
        "articleSlug": "39dad7ae",
        "user": {
            "username": "zhangsan",
            "bio": null,
            "avatar": null
        }
    },
    {
        "id": 5,
        "body": "comment body 3 ",
        "createdAt": "2022-01-22T11:15:02.000Z",
        "updatedAt": "2022-01-22T11:15:02.000Z",
        "userEmail": "zhangsan@qq.com",
        "articleSlug": "39dad7ae",
        "user": {
            "username": "zhangsan",
            "bio": null,
            "avatar": null
        }
    }
]

class Article extends PureComponent {
    //1 获取文章slug 
    constructor(props) {
        super(props)
        this.state = {
            slug: props.match.params.slug
        }
    }

    componentDidMount() {
        //2 获取文章详情 & 获取文章评论
    }

    render() {
        // const {article,comments,currentUser}  = this.props

        //文章不存在
        if (!article) {
            return null
        }

        // markdown数据>解析>html  
        const markdata = article.body
        console.log(markdata);
        const markhtml = marked.parse(markdata)
        console.log(markhtml);
        const markobj = { __html: markhtml }

        // 是否自己的文章
        // 前置：登录
        const isOwn = currentUser && currentUser.username === article.author.username

        return (
            <div>
                {/* 头信息： 标题 / 作者/ (关注 喜欢) / (修改 删除) */}
               
                   <div className='container'>
                       <h1>{article.title}</h1>  
                       <ArticleHeader article={article}/>  
                    
                
                {/* 文章信息: 内容 / 标签/ */}
                
                    <div className='col-xs-12'>
                            <div dangerouslySetInnerHTML={markobj}></div>
                        {
                            (article.tags || []).map(tag => {
                                return (<span className="badge badge-pill badge-primary">
                                    {tag}</span>
                                )
                            })

                        }
                    </div>
                

                {/* 文章评论 */}
                <CommentContainer 
                currentUser={currentUser} 
                slug= {article.slug}
                comments = {comments}

                    />

                </div>
              
            </div>
        )
    }
}

export default Article;
