import { memo } from "react"
import CommentItem from "./CommentItem"

const CommentList = props=>{
    const {comments,currentUser,slug} = props
    return(
        <div>
            {
                comments.map(comment=>{
                    return(
                    <CommentItem
                    key={comment.id}
                    comment={comment}
                    slug={slug}
                    currentUser={currentUser}

                    />)
                })
            }
        </div>
    )
}

export default memo(CommentList)