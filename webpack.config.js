

var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "directive/[name]-[hash].js",
    publicPath: '/'
  },
  plugins: [
      new htmlWebpackPlugin({
        filename: "index.html",
        template: "template.html",
        inject: "body"
      }),
      new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)|(bower_components) /,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }, {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  devServer: {
    contentBase: './' ,//本地服务器的目录
    historyApiFallback: true,// 404会指向index.template
    inline: true,
    hot: true,
    port:'8090'
  }
}

