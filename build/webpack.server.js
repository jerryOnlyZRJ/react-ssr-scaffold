const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: path.join(__dirname, "../src/server/index.js"),
    output: {
        path: path.join(__dirname, "../dist/server"),
        filename: "app.js",
    },
    plugins: [
        new CleanWebpackPlugin(["dist/server/*"], {
            root: path.resolve(__dirname, '..'),
            verbose: true,
            dry: false
        })
    ],
    externals: [nodeExternals()]
}