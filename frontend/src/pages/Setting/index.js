import { PureComponent } from 'react'
import Errors from '../../components/Errors'
import {memo} from 'react'

// const errors = {
//     "error1": "error1 content",
//     "error2": "error2 content"
// }
const errors = null

class SettingForm extends PureComponent {
    // state
    constructor(props) {
        super(props)
        const { currentUser } = props
        this.state = {
            avatar: (currentUser && currentUser.avatar) || '默认头像地址',
            username: (currentUser && currentUser.username) || '',
            bio: (currentUser && currentUser.bio) || '',
            email: (currentUser && currentUser.email) || ''
        }
    }

    render() {
        const { avatar, username, bio, email } = this.state
        return (
            <form>
                <fieldset>
                    <fieldset className='form-group'>
                        <input
                            className='form-control form-control-lg'
                            type='text'
                            placeholder='头像URL'
                            value={avatar}
                        />
                    </fieldset>
                    <fieldset className='form-group'>
                        <input
                            className='form-control form-control-lg'
                            type='text'
                            placeholder='用户名称'
                            value={username}
                        />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input
                            className='form-control form-control-lg'
                            type='email'
                            placeholder='用户邮箱'
                            value={email}
                        />
                    </fieldset>

                    <fieldset className='form-group'>
                        <textarea
                            className='form-control form-control-lg'
                            rows='8'
                            placeholder='用户简介'
                            value={bio}
                        />
                    </fieldset>

                    {/* 修改用户密码：新密码 */}
                    <fieldset className='form-group'>
                        <input
                            className='form-control form-control-lg'
                            type='password'
                            placeholder='设置新密码'
                        />
                    </fieldset>

                    <button
                        className='btn btn-lg btn-primary pull-xs-right'
                        type='submit'
                    >
                        更新设置
                    </button>
                </fieldset>
            </form>
        )
    }
}

const Setting = memo((props) => {
    const { currentUser } = props
    return (
        <div className='settings-page'>
            <div className='container page'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 col-xs-12'>
                        <h1 className='text-xs-center'>设置</h1>

                        {/* 错误提示 */}
                        <Errors errors={errors} />

                        {/* 修改用户信息 */}
                        <SettingForm currentUser={currentUser} />

                        <hr />
                        {/* 退出 */}
                        <button
                            className='btn btn-outline-danger'>

                            退出
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
})


export default Setting;
