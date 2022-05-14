

const Errors =(props)=>{
    const {errors} =props
    if(errors){
        return(
            <ul className="list-group">
                {
                    Object.keys(errors).map(key => {
                        return (
                            <li 
                            key={key} 
                                className='list-group-item list-group-item-danger'>
                                {key}:{errors[key]}

                            </li>
                        )
                    })
                }
            </ul>
        )
    }else{
        return null
    }

    
}
export default Errors