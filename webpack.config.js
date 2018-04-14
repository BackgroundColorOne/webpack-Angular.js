

var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var openWebpackPlugin = require('open-browser-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  devtool: '#source-map',
  entry: {
    app: "./src/app.js",
    vendor: ['angular']
  },
  output: {
    filename: "js/[name]-[hash].js",
    publicPath: '/'
  },
  plugins: [
      new htmlWebpackPlugin({
        filename: "index.html",
        template: "template.html",
        //favicon: __dirname + './favicon.ico', // 默认是自动加载根目录的favicon.ico
        //favicon: path.resolve('./static/favicon.ico'),
        favicon: './static/favicon.ico',
        inject: true
      }),
      new webpack.HotModuleReplacementPlugin(),
      new openWebpackPlugin({
        url: 'http://localhost:8090'
      })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)|(bower_components)/,
        include: resolve('src'),
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
      },
      {
        test: /^((?!.*src).)*.\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              localIdentName: '[name]-[local]_[hash:base64:5]',
              module: false
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // AngularJS doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      {
        test: /.*src*\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              localIdentName: '[name]-[local]_[hash:base64:5]',
              module: true
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // AngularJS doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      // Parse less files and modify variables
      {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                /*autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),*/
              ],
            },
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              modifyVars: {},
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
    //alias: {
    //  '@': resolve('src')
    //}
  },
  devServer: {
    contentBase: './' ,//本地服务器的目录
    historyApiFallback: true,// 404会指向index.template
    inline: true,
    hot: true,
    port:'8090'
    //proxy: {
    //  '/api': 'http://localhost:3333'
    //}
  }
}

