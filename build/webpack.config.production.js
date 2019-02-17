const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: 'production',
    output: {
        path: path.join(__dirname, "../dist/client"),
        filename: 'scripts/[name].[hash:5].js',
        chunkFilename: "scripts/[name]-[chunkhash:5].chunk.js",
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: { // 抽离第三方插件
                    test: /node_modules/, // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'common/vendor', // 打包后的文件名，任意命名    
                    priority: 10 // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                },
                utils: { // 抽离自定义公共代码
                    test: /\.js$/,
                    chunks: 'initial',
                    name: 'common/utils',
                    minSize: 0 // 只要超出0字节就生成一个新包
                }
            }
        },
        runtimeChunk: {
            name: 'common/runtime'
        },
        // js,css资源压缩
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                // 多核压缩，提升效率
                parallel: true,
                // set to true if you want JS source maps
                sourceMap: true,
                // 去除上线文件的console和debugger 
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', {
                        discardComments: {
                            removeAll: true
                        }
                    }],
                },
                canPrint: true
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "../index.html",
            template: path.join(__dirname, "../src/index.html"),
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // https://github.com/kangax/html-minifier#options-quick-reference
            }
        })
    ]
}