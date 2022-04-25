import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {/* 预留多个SPA,多个根组件入口 */}
            <Route path="/" component={App} />
        </Switch>
    </BrowserRouter>
    ,
    document.getElementById('root')
);