const {resolve} = require('path')
// merge webpack config
const webpackMerge = require('webpack-merge')
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || "development";
let _mergeConfig = null
if (argv.env == "server") {
    _mergeConfig = require('./build/webpack.server.js')
} else {
    _mergeConfig = require(`./build/webpack.config.${_mode}.js`);
}

let localConfig = {
    module: {
        rules: [{
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {}
                }]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"],
        alias: {
            '@': resolve(__dirname, 'src/client')
        }
    },
    externals: {
        // 前面是我们import的依赖名，后面是我们的变量名
        // module.export.react = window.React
        "react": "React",
        "react-dom": "ReactDOM",
        "redux": "Redux",
        "react-router-dom": "ReactRouterDOM"
    }
}

module.exports = webpackMerge(localConfig, _mergeConfig)