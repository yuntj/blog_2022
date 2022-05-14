import { Component } from 'react'
import {Link} from 'react-router-dom'
import Errors from '../../components/Errors'

// const errors = {
//     "error1": "error1 content",
//     "error2": "error2 content"
// }

const errors = null


class Login extends Component {
    render() {
        return (
            <div className='container'>
                <div className='col-md-6 offset-md-3 col-xs-12'>
                    <h1>登录</h1>
                    {/* 重定向注册 */}
                    <p>
                        <Link to='/regist'>
                            账号未注册？
                        </Link>
                    </p>
                    {/* 错误提示 */}
                    <div className='form-group'>
                        <Errors errors={errors} />
                    </div>

                    {/* 登录界面 */}
                    <form>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                type='text'
                                placeholder='邮箱'
                                required>
                            </input>
                        </div>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                type='text'
                                placeholder='密码'
                                required>
                            </input>
                        </div>
                        <button
                            className='btn btn-primary'
                            type='submit'>注册
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
