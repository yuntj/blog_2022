import {memo} from 'react'
import { Link } from 'react-router-dom'
import { PureComponent } from 'react'
import ArticlesList from '../ArticlesList/index'

const mock = {
    profile: {
        username: 'lisi',
        avatar: 'https://yudafeng.github.io/static/default.png',
        bio: 'lisi user info',
        email: 'lisi@qq.com',
        following: false
    },
    currentUser: {
        username: 'test1',
        avatar: 'https://yudafeng.github.io/static/default.png',
        bio: 'test1 user info',
        email: 'test1@qq.com'
    },
    article: {
        "articles": [
            {
                "slug": "1371cdf8",
                "title": "你好aa",
                "description": "html 你好aa",
                "body": "html 你好aa",
                "createdAt": "2022-01-20T05:28:57.000Z",
                "updatedAt": "2022-01-20T05:28:57.000Z",
                "userEmail": "lisi@qq.com",
                "tags": [
                    "html",
                    "tag1"
                ],
                "author": {
                    "username": "lisi",
                    "email": "lisi@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 1
            },
            {
                "slug": "16bade37",
                "title": "你好aa",
                "description": "html 你好aa",
                "body": "html 你好aa",
                "createdAt": "2022-01-20T08:17:44.000Z",
                "updatedAt": "2022-01-20T08:17:44.000Z",
                "userEmail": "lisi@qq.com",
                "tags": [
                    "html",
                    "tag1"
                ],
                "author": {
                    "username": "lisi",
                    "email": "lisi@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 1
            },
            {
                "slug": "39dad7ae",
                "title": "你好1",
                "description": "html 你好1",
                "body": "html 你好1",
                "createdAt": "2022-01-20T05:21:50.000Z",
                "updatedAt": "2022-01-20T05:21:50.000Z",
                "userEmail": "wangwu@qq.com",
                "tags": [
                    "html",
                    "tag1"
                ],
                "author": {
                    "username": "wangwu",
                    "email": "wangwu@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "43daa00d",
                "title": "你好aa",
                "description": "html 你好aa",
                "body": "html 你好aa",
                "createdAt": "2022-01-20T08:17:45.000Z",
                "updatedAt": "2022-01-20T08:17:45.000Z",
                "userEmail": "lisi@qq.com",
                "tags": [
                    "html",
                    "tag1"
                ],
                "author": {
                    "username": "lisi",
                    "email": "lisi@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "539547df",
                "title": "你好aa",
                "description": "html 你好aa",
                "body": "html 你好aa",
                "createdAt": "2022-01-20T08:17:45.000Z",
                "updatedAt": "2022-01-20T08:17:45.000Z",
                "userEmail": "lisi@qq.com",
                "tags": [
                    "html",
                    "tag1"
                ],
                "author": {
                    "username": "lisi",
                    "email": "lisi@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "78fef5d6",
                "title": "你好",
                "description": "html 你好",
                "body": "html 你好",
                "createdAt": "2022-01-19T10:48:42.000Z",
                "updatedAt": "2022-01-19T10:48:42.000Z",
                "userEmail": "wangwu@qq.com",
                "tags": [
                    "html",
                    "tag1"
                ],
                "author": {
                    "username": "wangwu",
                    "email": "wangwu@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "7df21475",
                "title": "你好aa",
                "description": "html 你好aa",
                "body": "html 你好aa",
                "createdAt": "2022-01-20T08:17:41.000Z",
                "updatedAt": "2022-01-20T08:17:41.000Z",
                "userEmail": "lisi@qq.com",
                "tags": [
                    "html",
                    "tag1"
                ],
                "author": {
                    "username": "lisi",
                    "email": "lisi@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "a78e3634",
                "title": "你好aa",
                "description": "html 你好aa",
                "body": "html 你好aa",
                "createdAt": "2022-01-20T08:17:43.000Z",
                "updatedAt": "2022-01-20T08:17:43.000Z",
                "userEmail": "lisi@qq.com",
                "tags": [
                    "html",
                    "tag1"
                ],
                "author": {
                    "username": "lisi",
                    "email": "lisi@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "aad4ed9a",
                "title": "你好aa",
                "description": "html 你好aa",
                "body": "html 你好aa",
                "createdAt": "2022-01-20T08:17:43.000Z",
                "updatedAt": "2022-01-20T08:17:43.000Z",
                "userEmail": "lisi@qq.com",
                "tags": [
                    "html",
                    "tag1"
                ],
                "author": {
                    "username": "lisi",
                    "email": "lisi@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "c07d7d23",
                "title": "你好aa",
                "description": "html 你好aa",
                "body": "html 你好aa",
                "createdAt": "2022-01-20T08:17:42.000Z",
                "updatedAt": "2022-01-20T08:17:42.000Z",
                "userEmail": "lisi@qq.com",
                "tags": [
                    "html",
                    "tag1"
                ],
                "author": {
                    "username": "lisi",
                    "email": "lisi@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "d2ba3385",
                "title": "你好aa",
                "description": "html 你好aa",
                "body": "html 你好aa",
                "createdAt": "2022-01-20T08:17:46.000Z",
                "updatedAt": "2022-01-20T08:17:46.000Z",
                "userEmail": "lisi@qq.com",
                "tags": [
                    "html",
                    "tag1"
                ],
                "author": {
                    "username": "lisi",
                    "email": "lisi@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "d6a5dce9",
                "title": "你好3",
                "description": "html 你好3",
                "body": "html 你好3",
                "createdAt": "2022-01-20T05:26:24.000Z",
                "updatedAt": "2022-01-20T05:26:24.000Z",
                "userEmail": "wangwu@qq.com",
                "tags": [
                    "html",
                    "tag1"
                ],
                "author": {
                    "username": "wangwu",
                    "email": "wangwu@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            }
        ],
        "articlesCount": 12
    }
}

const ButtonInfo = memo((props) => {
    const { isCurrentUser, profile } = props
    if (isCurrentUser) {
        return (
            <Link
                to='/setting'
                className="btn btn-sm btn-outline-secondary action-btn">
                <i className="fa fa-cog"></i>编辑设置
            </Link>
        )
    } else {

        return (
            <button className={profile.following ? 'btn-secondary' : 'btn-outline-secondary'}>
                <i className="fa fa-user-plus"></i> {' '}
                {profile.following ? '取消关注' : '关注作者'}
            </button>

        )
    }
})

class Profile extends PureComponent {

    renderTag = () => {
        return (
            <ul className="nav nav-pills outline-active">
                <li className='nav-item'>
                    <Link
                        className="nav-link active"
                        to={`/${mock.currentUser.username}/profile`}
                    >
                        我的文章
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className="nav-link"
                        to={`/${mock.currentUser.username}/favorites`}
                    >
                        喜欢文章
                    </Link>
                </li>
            </ul>
        )
    }

    render() {
        // const {profile,currentUser} = this.props
        const { profile, currentUser, article } = mock

        // 根据用户名称=>用户信息 profile  =>跟当前登录用户走比较   用户名称是否相同=>区分按钮信息
        const isCurrentUser = currentUser && profile.username === currentUser.username

        return (
            <div className='profile-page'>
                {/* 用户信息 */}
                <div className='user-info'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xs-12 col-md-10 offset-md-1'>
                                {/*基本信息  */}
                                <img src={profile.avatar || ''} className='user-img' alt={profile.avatar} />
                                <h4>{profile.username}</h4>
                                <p>{profile.bio}</p>

                                {/* 按钮信息 */}
                                <ButtonInfo isCurrentUser={isCurrentUser} profile={profile} />
                            </div>
                        </div>
                    </div>

                </div>

                {/* 文章信息 */}
                <div className='container'>
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            {/* 选项卡 */}
                            <div className='aticles-toggle'>
                                {
                                    this.renderTag()
                                }
                            </div>

                            {/* 文章列表 */}
                            <ArticlesList
                                articles={article.articles}
                                articlesCount={article.articlesCount}
                                currentPage={1}
                            />
                        </div>

                    </div>

                </div>

            </div>
        )
    }

    componentDidMount() {
        // 作者信息profile
        // 作者自己文章
    }
}

export default Profile
