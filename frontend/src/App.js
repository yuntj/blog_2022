
import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'

class App extends Component {

  render() {
    return (
      <div>
        {/* 应用头部 */}
        <Header />

        {/* 主体页面 */}
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    )
  }
}
export default App;
