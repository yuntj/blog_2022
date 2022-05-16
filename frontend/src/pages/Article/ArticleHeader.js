import { Link } from 'react-router-dom'
import { memo } from 'react'
import ArticleAction from './ArticleAction'


const ArticleHeader = (props) => {
    const { article } = props
    const { username, avatar } = article.author
    return (
        <div>
            <div className="article-meta">
                <div className="info">
                <Link to={`/${username}/profile`}>
                    <img src={avatar || ''} alt={username} />
                </Link>
                </div>
                <div className='info'>
                    <Link to={`/${username}/profile`}>
                        {username}
                    </Link>

                </div>
                <span>
                    {new Date(article.createdAt).toDateString()}
                </span>
            </div>

            {/*  关注 喜欢 */}
            <ArticleAction isOwn={props.isOwn} slug={article.slug} />
        </div>
    )
}

export default memo(ArticleHeader)