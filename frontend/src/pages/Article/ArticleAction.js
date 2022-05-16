import { Link } from 'react-router-dom'
import { memo } from 'react'


const ArticleAction = (props) => {
    const { isOwn, slug } = props
    if (isOwn) {
        return (
            <span>
                <Link to={`/edit/${slug}`}>
                    编辑文章
                </Link>
                <Link to={`/delete/${slug}`}>
                    删除文章
                </Link>

            </span>
        )
    } else {
        return (
            <span>
                <button>
                    关注
                </button>
                <button>
                    喜欢
                </button>

            </span>
        )

    }

}

export default memo(ArticleAction)