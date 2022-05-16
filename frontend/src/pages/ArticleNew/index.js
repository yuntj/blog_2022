import { PureComponent } from 'react'
import Errors from '../../components/Errors'

// const errors = {
//     "error1": "error1 content",
//     "error2": "error2 content"
// }
// const errors = null


class ArticleNew extends PureComponent {
    render() {
        let {errors,tags} = this.props
        tags=['html','js','css']
        return (
            <div className='container'>
                <div className='col-md-6 offset-md-3 col-xs-12'>
                    <h1>创建文章</h1>
                   
                    {/* 错误提示 */}
                    <div className='form-group'>
                        <Errors errors={errors} />
                    </div>

                    {/* 新建文章 */}
                    <form>
                        <fieldset className='form-group'>
                            <input
                                className='form-control'
                                type='text'
                                placeholder='文章标题'
                                required>
                            </input>
                        </fieldset>
                        <fieldset className='form-group'>
                            <input
                                className='form-control'
                                type='text'
                                placeholder='文章描述'
                                required>
                            </input>
                        </fieldset>
                        
                        <fieldset className='form-group'>
                            <textarea
                                className='form-control'
                                rows='12'
                                placeholder='文章内容'
                                required>
                            </textarea>
                        </fieldset>
                        <fieldset className='form-group'>
                            <input
                                className='form-control'
                                type='text'
                                placeholder='文章标签'
                                required>
                            </input>
                            <br/>
                            <div>
                                {
                                    (tags|| []).map(tag=>{
                                        return (<span className="badge badge-pill badge-primary">
                                            {tag}</span>
                                            )
                                    })

                                }
                            </div>
                        </fieldset>
                        <button
                            className='btn btn-primary'
                            type='submit'>提交
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ArticleNew;
