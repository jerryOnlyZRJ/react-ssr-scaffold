import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../components/Hello/Hello';

// 如果服务端直出，则只绑定事件，不渲染组件
ReactDOM.hydrate(<Hello />, document.getElementById('root'))