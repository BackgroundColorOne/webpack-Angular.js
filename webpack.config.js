

var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "js/[name]-[hash].js",
    //path: __dirname +  "/dist",// dev-server环境下无须设置该项
    publicPath: './'
    // 在dev-server的环境下可以通过publicPath: 'localhost:8090/dist/'访问到index.html
  },
  plugins: [
      new htmlWebpackPlugin({
        filename: "index.html",//输出文件，该文件的根路径是output.path
        template: "template.html",// 指定源模板文件的路径
        inject: "body"
      }),
      new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        // exports is not defined 是要去掉preset中modules:false的配置，
        // $exports is not defined 是要在转换中取到node_modules这些包
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
  /*webpack-dev-server所使用的bundle.js文件并不是webpack.config.js中output打包生成的bundle.js，而是使用webpack-dev-server自己打包生成的，这个文件不存在与output或其他路径中，而是存到了内存中，事实上webpack-dev-server所使用的那个bundle.js我们是看不到的！*/
  devServer: {
    contentBase: './' ,//本地服务器的目录
    historyApiFallback: true,// 404会指向index.html
    inline: true,
    hot: true,
    port:'8090'
  }
}
// package.json文件中不能出现注释！
// 之前没有全局安装webpack-cli导致直接使用babel的query:[preset:[['es2015']]报错，如果需要在老的浏览器上测试请使用webpack-dev-server,本地安装的版本会覆盖全局安装的版本
// F:\practice\vue-project\node_modules\ajv-keywords\keywords\instanceof.js:52    throw new Error('invalid "instanceof" keyword value ' + c); 请问这是什么问题？版本问题，版本太高需要降低一下版本
