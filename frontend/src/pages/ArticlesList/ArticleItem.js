import {memo} from 'react'
import {Link} from 'react-router-dom'


const ArticleItem = ({article})=>{
    const {username,avatar} = article.author
    return(
        <div>
            <div>
                <Link to={`/${username}`}>
                    <img src={avatar || '//yuntj.github.io/static/avatar_default.jpg'} alt={username}/>
                </Link>
                <Link to={`/${username}`}>
                    {username}
                </Link>
                <span>
                {new Date(article.createdAt).toDateString()}
                </span>
                <button className={article.isFavorite ? 'btn btn-danger' : 'btn btn-light'}>
                    <i className="bi bi-heart-fill"></i>{article.favoriteCount}
                </button>
            </div>
            <div>
                <Link to = {`/article/${article.slug}`}>
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <span>点击查看更多...</span>
                </Link>
                <ul>
                    {
                        article.tags.map(tag=>{
                            return(
                                <li key={tag}>{tag}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default memo(ArticleItem)