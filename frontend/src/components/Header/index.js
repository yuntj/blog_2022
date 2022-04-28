import { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import HeaderMenu from './menu'

class Header extends PureComponent {
    render() {
        const {appName,currentUser} = this.props
        console.log(appName,currentUser)
        return(
            <nav className='navbar navbar-light'>
                <div className='container'>
                    {/* 左边 */}
                    <Link to = "/" className="navbar-brand">
                        {appName}
                    </Link>
                    {/* 右边 */}
                    <HeaderMenu currentUser={currentUser}/>

                </div>

            </nav>
        )
    }
}

export default Header;
