const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist/client'),
    filename: 'scripts/[name].bundle.js',
    chunkFilename: 'scripts/[name].chunk.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: path.join(__dirname, '../src/index.html'),
    }),
  ],
  watch: true,
}
