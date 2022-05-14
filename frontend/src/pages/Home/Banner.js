import {memo} from 'react'


const Banner = (props) =>{
    return(
        <div className='jumbotron jumbotron-fluid'>
            <div className="container">
                <h1 className="display-4">Blog 2022</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
    )
}
export default memo(Banner)