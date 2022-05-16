import { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Errors from '../../components/Errors'

// const errors = {
//     "error1": "error1 content",
//     "error2": "error2 content"
// }
const errors=null
//                         request - api - server - route - controller - model - database
// ui - form data - button - 三方请求 - token - user - 同步store()/localStorage
//                         重定向

class Regist extends PureComponent {
    render() {
        return (
            <div className='container'>
                <div className='col-md-6 offset-md-3 col-xs-12'>
                    <h1>注册</h1>
                    {/* 重定向登录 */}
                    <p>
                        <Link to='/login'>
                            账号已注册请直接登陆
                        </Link>
                    </p>
                    {/* 错误提示 */}
                    <div className='form-group'>
                        <Errors errors={errors} />
                    </div>

                    {/* 注册界面 */}
                    <form>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                type='text'
                                placeholder='用户名称'
                                required>
                            </input>
                        </div>
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
                            type='submit'>登录
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Regist;
