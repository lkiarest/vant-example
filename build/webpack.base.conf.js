/* eslint-disable */
var path = require('path')
var assign = require('object-assign')
var config = require('./config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var globalConf = require('../build.config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var hasElement = function(arr) { // 判断数组是否不为空
    return arr && arr.length > 0;
}

var babelDir = [
    path.resolve(__dirname, '../src'),
    path.resolve(__dirname, './tmp'),
    path.resolve(__dirname, './template')
];

if (hasElement(globalConf.babelDir)) {
    babelDir = babelDir.concat(globalConf.babelDir)
}

var alias = assign({
    'src': path.resolve(__dirname, '../src'),
    'pages': path.resolve(__dirname, '../src/pages'),
    'core': path.resolve(__dirname, '../src/core'),
    'conf': path.resolve(__dirname, '../src/config'),
    'router': path.resolve(__dirname, './template/router'),
    'node_modules': path.resolve(__dirname, '../node_modules')
}, globalConf.alias);

var loaders = [
  {
    test: /\.vue$/,
    use: ['vue-loader']
  },
  {
    test: /\.js$/,
    use: ['babel-loader'],
    include: babelDir,
    exclude: /node_modules/
  },
  // {
  //   test: /\.json$/,
  //   loader: 'json-loader'
  // },
  {
    test: /\.html$/,
    use: ['vue-html-loader']
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader']
  },
  {
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('statics/imgs/hash/[name].[hash:7].[ext]')
        }
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('statics/fonts/[name].[hash:7].[ext]')
        }
    }
  }
]

if (hasElement(globalConf.loaders)) {
    loaders = loaders.concat(globalConf.loaders)
}

module.exports = {
  entry: config.entry,
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name]/[name].js'
    // filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [resolve('src'), resolve('node_modules')],
    alias: alias,
    symlinks: false
  },
  module: {
    rules: loaders,
    noParse: /moment|lodash|jquery|uvalidator|es6|mobile/
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter'
  }
}
