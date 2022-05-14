import { Link } from 'react-router-dom'
import {memo} from 'react'


const HeaderMenu = memo(
    ({ currentUser }) => {
    if (currentUser) {
        return (
            <ul className='nav justify-content-end'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>主页</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/article' className='nav-link'>创建文章</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/setting' className='nav-link'>设置</Link>
                </li>
                <li className='nav-item'>
                    {/* <Link to={`/@&{currentUser.username}`}  */}
                    <Link to='/profile' className='nav-link'>
                        <img src={currentUser.avatar || '//yuntj.github.io/static/avatar_default.jpg'} className="d-inline-block align-top" width="20" height="20" />
                        {currentUser.username}
                    </Link>
                </li>
            </ul>

        )

    } else {
        return (
            <ul className='nav justify-content-end'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>主页</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className='nav-link'>登录</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/regist' className='nav-link'>注册</Link>
                </li>

            </ul>

        )

    }

}) 

export default HeaderMenu