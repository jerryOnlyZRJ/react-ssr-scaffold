const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "../src/client/index.js"),
    output: {
        path: path.join(__dirname, "../dist/client"),
        filename: "scripts/[name].min.js",
        chunkFilename: "scripts/[name].chunk.js",
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "../index.html",
            template: path.join(__dirname, "../src/index.html"),
        }),
        new CleanWebpackPlugin(["dist/client/*"], {
            root: path.resolve(__dirname, '..'),
            verbose: true,
            dry: false
        })
    ],
    watch: true
}