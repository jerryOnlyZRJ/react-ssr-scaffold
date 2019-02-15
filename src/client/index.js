import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../components/Hello/Hello';

// 只绑定事件，不渲染组件
ReactDOM.hydrate(<Hello />, document.getElementById('root'))