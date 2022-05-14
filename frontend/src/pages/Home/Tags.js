import { memo } from 'react'


const Tags = memo((props) => {
    const {tags} = props
    return (
        <div>
            {
                tags.map(tag=>{
                    return(
                        <button
                            type="button"
                            className="btn btn-outline-primary "
                            disabled
                            key={tag}>
                                {tag}
                        </button>
                    )
                })
            }
            
        </div>
       
    )
})

export default Tags