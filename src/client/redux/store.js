import {
    applyMiddleware,
    combineReducers,
    createStore,
    compose
} from 'redux';
// redux-thunk重写了redux的dispatch，在默认只能传入一个action对象的情况下，允许传入一个函数
import trunkMiddleware from 'redux-thunk';
import {
    logger
} from 'redux-logger';

import reducers from './reducers';

// 由于node层使用单例模式会产生多个请求共用一个store的可能，因此要改装成一个function
function getStore(defaultState){
    return createStore(
        compose(
            combineReducers
        )({
            ...reducers
        }),
        defaultState,
        applyMiddleware(
            trunkMiddleware,
            logger
        )
    )
}



export default getStore;