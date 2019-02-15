import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { BrowserRouter } from 'react-router-dom'
import IndexRoute from '../routers/IndexRoute/IndexRoute'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <IndexRoute />
            </BrowserRouter>
        )
    }
}

// 如果服务端直出，则只绑定事件，不渲染组件
ReactDOM.hydrate(<App />, document.getElementById('root'))