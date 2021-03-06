const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '../src/client/index.jsx'),
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
              },
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:5].css',
    }),
    new CopyWebpackPlugin([
      {
        from: 'favicon.ico',
        to: './images',
      },
    ]),
    new CleanWebpackPlugin(['dist/client/*'], {
      root: path.resolve(__dirname, '..'),
      verbose: true,
      dry: false,
    }),
  ],
}
