import {memo} from 'react'
import ArticleItem from './ArticleItem'
import Pagination from './Pagination'

/**
 * props: articles [{article1},{article2}...]分页数据
 * 
 */

const ArticlesList = props =>{
    // 数据没加载出来：props数据没传来
    if(!props.articles){
        return(
            <div>加载中...</div>
        )
    }
    // 数组为空
    if(props.articles.length===0){
        return(
            <div>这里还没有文章</div>
        )
    }

    // 有文章
    //      文章条数<=10条不需要分页
    //      >10分页
    return(
        <div>
            {/* 文章数据 */}
            {
                props.articles.map(article=>{
                    return <ArticleItem article={article} key={article.slug}/>                
                })
            }
            {/* 分页 */}
            <Pagination
                count={props.articlesCount}
                current={props.currentPage}
            />

        </div>
    )

}
export default memo(ArticlesList)