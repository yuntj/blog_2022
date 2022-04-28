import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Switch>
            {/* 预留多个SPA,多个根组件入口 */}
            <Route path="/" component={App} />
        </Switch>
    </BrowserRouter>
);