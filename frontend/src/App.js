
import { PureComponent,lazy,Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
//import Login from './pages/Login'

const Login = lazy(() => import('./pages/Login'))
const Regist = lazy(() => import('./pages/Regist'))
const Setting = lazy(() => import('./pages/Setting'))
const Article = lazy(() => import('./pages/Article'))
const Profile = lazy(() => import('./pages/Profile'))
const appName = 'blog'
const currentUser = {
  username: 'test1',
  avatar: '//yuntj.github.io/static/avatar_default.jpg',
  bio: 'user info'
}


class App extends PureComponent {

  render() {
    return (
      <div>
        {/* 应用头部 */}
        <Header appName={appName} currentUser={currentUser}/>

        {/* 主体页面 */}
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path='/' component={Home} exact />
            {/* 精确匹配 完全是/ */}
            <Route path='/login' component={Login} />
            <Route path='/regist' component={Regist} />
            <Route path='/setting' component={Setting} />
            <Route path='/article' component={Article} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </Suspense>
      </div>
    )
  }
}
export default App;
