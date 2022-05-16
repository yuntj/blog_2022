import { memo } from "react"
import {Link} from 'react-router-dom'
import CommentList from "./CommentList"


const CommentContainer = (props) => {
    const { currentUser,slug,comments } = props
    if (!currentUser) {
        return (
            <div className="col-xs-12 col-md-8 offset-md-2">
                {/* 登录信息 */}
                <p>
                    <Link to='/login'>登录</Link>
                    <Link to='/regist'>注册</Link>
                </p>
                {/* 评论信息 */}

            </div>
        )
    } else {
        return (
            <div className="col-xs-12 col-md-8 offset-md-2">
                {/* 添加评论 */}
                <p>
                    <form>
                        <div className='form-group'>
                            <img src={currentUser.avatar || ''} />
                            <textarea
                                className='form-control'
                                placeholder="添加评论"
                                rows={3}>
                            </textarea>
                        </div>
                        <div className='form-group'>
                           
                            <button
                                className='btn btn-primary'>提交</button>
                        </div>
                    </form>
                </p>
                <br/>
                
                {/* 评论信息 */}
                <h3>评论区</h3>
                <CommentList
                comments={comments}
                slug={slug}
                currentUser={currentUser}/>

            </div>
        )

    }
}

export default memo(CommentContainer)