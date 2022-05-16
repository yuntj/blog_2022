import { memo } from "react"
import {Link} from 'react-router-dom'


const CommentItem = props=>{
    const {comment,currentUser,slug} = props
    const showDelete = currentUser&& currentUser.username===comment.user.username
   
        return(
            <div>
                
                
                <div className="info">
                    <Link to={`/${comment.user.username}/profile`}>
                        <img src={comment.user.avatar || ''} alt={comment.user.username} />
                    </Link>
                </div>
                <div className='info'>
                    <Link to={`/${comment.user.username}/profile`}>
                        {comment.user.username}
                    </Link>
                    <span>{new Date(comment.createdAt).toDateString()}</span>
                    {
                        showDelete ? <button>删除</button>:null
                    }

                </div>

            
            </div>
            
        )

    
   
}

export default memo(CommentItem)