import { Component } from 'react'
import Banner from './Banner';
import Tags from './Tags';
import Main from './Main';

class Home extends Component {
    render() {
       return(
           <div className='container'>
               <Banner/>
               <div className="row">
               <div className='col-9'>
                   <Main/>
               </div>
               <div className='col-3'>
                   <div className='sidebar'>
                       <p>热门标签</p>
                       <Tags tags={['html','css','js']}/>
                   </div>
                   
               </div>
               </div>
           </div>
       )
    }
}

export default Home;
