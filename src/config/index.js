import {
    logger
} from 'redux-logger';

let localConfig = {}
let _mergeConfig = null

// process.env.NODE_ENV在webpack编译时与webpack的mode一致
if (process.env.NODE_ENV === "development") {
    _mergeConfig = {
        port: 3000,
        reduxMiddlewares: [logger]
    }
} else {
    _mergeConfig = {
        port: 9010,
        reduxMiddlewares: []
    }
}

export default Object.assign(localConfig, _mergeConfig)