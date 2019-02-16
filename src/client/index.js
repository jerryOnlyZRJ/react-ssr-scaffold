// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
// react-router
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from '@/container/Layout/Layout'
import IndexRoute from '@/routers/IndexRoute/IndexRoute'
// redux
import { Provider } from 'react-redux';
import getStore from '@/redux/store'

class App extends React.Component {
    render() {
        return (
            <Provider store={getStore()}>
                <BrowserRouter>
                    <Layout>
                        <div>
                        {IndexRoute.map(route => (
                            <Route {...route} />
                        ))}
                        </div>
                    </Layout>
                </BrowserRouter>
            </Provider>
        )
    }
}

// 如果服务端直出，则只绑定事件，不渲染组件
ReactDOM.hydrate(<App />, document.getElementById('root'))