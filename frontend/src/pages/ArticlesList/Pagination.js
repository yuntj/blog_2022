import {memo} from 'react'

const Pagination = props=>{
    if(props.count<=10){
        return null
    }
    
    const pageNums = []
    for(let index=1;index<=Math.ceil(props.count/10);index++){
        pageNums.push(index)
    }
    return(
        <nav>
            <ul className="pagination">
                {
                    pageNums.map(pageNum=>{
                        //当前页
                        const isCurrentPage = pageNum === props.current

                        // 页码
                        return(
                            <li  
                            className={isCurrentPage?'page-item active':'page-item'}
                                key={pageNum}>
                                <a className='page-link'>
                                    {pageNum}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )

}
export default memo(Pagination)