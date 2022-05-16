import {memo} from 'react'
import ArticlesList from '../ArticlesList'

const mock_data={
    "status": 1,
    "message": "条件查询文章获取成功",
    "data": {
        "articles": [
            {
                "slug": "16844d03",
                "title": "t7",
                "description": "hhwe77777rw6",
                "body": "htm777777dy426",
                "createdAt": "2022-04-30T09:01:49.000Z",
                "updatedAt": "2022-04-30T09:01:49.000Z",
                "userEmail": "test1@qq.com",
                "tags": [
                    "html",
                    "js"
                ],
                "author": {
                    "username": "test1",
                    "email": "test1@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "2c35aedc",
                "title": "t8",
                "description": "hhwe888887rw6",
                "body": "htm888888dy426",
                "createdAt": "2022-04-30T09:02:07.000Z",
                "updatedAt": "2022-04-30T09:02:07.000Z",
                "userEmail": "zhangsan@qq.com",
                "tags": [
                    "css",
                    "js"
                ],
                "author": {
                    "username": "zhangsan",
                    "email": "zhangsan@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "31441e24",
                "title": "title2",
                "description": "hhhhh body2",
                "body": "html 122222",
                "createdAt": "2022-04-30T08:59:49.000Z",
                "updatedAt": "2022-04-30T08:59:49.000Z",
                "userEmail": "zhangsan@qq.com",
                "tags": [
                    "css",
                    "html"
                ],
                "author": {
                    "username": "zhangsan",
                    "email": "zhangsan@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "3ac7248f",
                "title": "zhangsan",
                "description": "hhhhh body1",
                "body": "html 11111",
                "createdAt": "2022-04-25T07:22:34.000Z",
                "updatedAt": "2022-04-25T07:22:34.000Z",
                "userEmail": "zhangsan@qq.com",
                "tags": [
                    "html",
                    "js"
                ],
                "author": {
                    "username": "zhangsan",
                    "email": "zhangsan@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 1
            },
            {
                "slug": "54e566dd",
                "title": "t6",
                "description": "hhwerw6",
                "body": "htm6666 body426",
                "createdAt": "2022-04-30T09:01:37.000Z",
                "updatedAt": "2022-04-30T09:01:37.000Z",
                "userEmail": "zhangsan@qq.com",
                "tags": [
                    "html",
                    "js"
                ],
                "author": {
                    "username": "zhangsan",
                    "email": "zhangsan@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "accc8ab5",
                "title": "title3",
                "description": "hhhhh bod332wrer2",
                "body": "html 3333332",
                "createdAt": "2022-04-30T09:00:18.000Z",
                "updatedAt": "2022-04-30T09:00:18.000Z",
                "userEmail": "zhangsan@qq.com",
                "tags": [
                    "html",
                    "tag2"
                ],
                "author": {
                    "username": "zhangsan",
                    "email": "zhangsan@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "b3a72912",
                "title": "t9",
                "description": "hhwe888887rw6",
                "body": "htm888888dy426",
                "createdAt": "2022-04-30T09:02:18.000Z",
                "updatedAt": "2022-04-30T09:02:18.000Z",
                "userEmail": "zhangsan@qq.com",
                "tags": [
                    "css",
                    "js"
                ],
                "author": {
                    "username": "zhangsan",
                    "email": "zhangsan@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "c3bd852d",
                "title": "t55554",
                "description": "h55555hwerw",
                "body": "htm5554 body55542",
                "createdAt": "2022-04-30T09:01:13.000Z",
                "updatedAt": "2022-04-30T09:01:13.000Z",
                "userEmail": "zhangsan@qq.com",
                "tags": [
                    "css3",
                    "js"
                ],
                "author": {
                    "username": "zhangsan",
                    "email": "zhangsan@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "f9f9ccc8",
                "title": "ti444",
                "description": "hhwerwer444442",
                "body": "htm4444 body442",
                "createdAt": "2022-04-30T09:00:52.000Z",
                "updatedAt": "2022-04-30T09:00:52.000Z",
                "userEmail": "zhangsan@qq.com",
                "tags": [
                    "css",
                    "js"
                ],
                "author": {
                    "username": "zhangsan",
                    "email": "zhangsan@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "f9f9ccc8",
                "title": "ti444",
                "description": "hhwerwer444442",
                "body": "htm4444 body442",
                "createdAt": "2022-04-30T09:00:52.000Z",
                "updatedAt": "2022-04-30T09:00:52.000Z",
                "userEmail": "zhangsan@qq.com",
                "tags": [
                    "css",
                    "js"
                ],
                "author": {
                    "username": "zhangsan",
                    "email": "zhangsan@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "f9f9ccc8",
                "title": "ti444",
                "description": "hhwerwer444442",
                "body": "htm4444 body442",
                "createdAt": "2022-04-30T09:00:52.000Z",
                "updatedAt": "2022-04-30T09:00:52.000Z",
                "userEmail": "zhangsan@qq.com",
                "tags": [
                    "css",
                    "js"
                ],
                "author": {
                    "username": "zhangsan",
                    "email": "zhangsan@qq.com",
                    "bio": null,
                    "avatar": null
                },
                "isFavorite": false,
                "favoriteCount": 0
            },
            {
                "slug": "f9f9ccc8",
                "title": "ti444",
                "description": "hhwerwer444442",
                "body": "htm4444 body442",
                "createdAt": "2022-04-30T09:00:52.000Z",
                "updatedAt": "2022-04-30T09:00:52.000Z",
                "userEmail": "zhangsan@qq.com",
                "tags": [
                    "css",
                    "js"
                ],
                "author": {
                    "username": "zhangsan",
                    "email": "zhangsan@qq.com",
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

const YourTab = memo((props)=>{
    return(
       
            <button
            className={props.tab === 'yours' ? 'btn btn-secondary active' :'btn btn-secondary'}>关注</button>
        
    )
})

const GlobalTab = memo((props) => {
    return (
        <button
            className={props.tab === 'all' ? 'btn btn-secondary active' : 'btn btn-secondary'}>全部
        </button>
        
    )
})

const TagTab =memo((props)=>{
    //获取标签
    const {tag} = props
    //没有标签
    if(!tag){
        return null
    }
    // 有标签
    return(
        <button
        className='btn btn-secondary'>{tag}
    </button>
    )
    

})

const Main = memo((props)=>{
    return(
        <div>
            <div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <YourTab tab='yours' />
                    <GlobalTab tab='all'  />
                    <TagTab tag='html'/>
                </div>
            </div>
            <div>
                <ArticlesList 
                articles={mock_data.data.articles}
                articlesCount={mock_data.data.articlesCount}
                currentPage={1}
                />
            </div>
         
        </div>
    )
}
)

export default Main