'use strict'
/* eslint-disable */

const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: 'development',
  entry: {
    main: [
      './src/js/main.js',
      './src/style/main.scss'
    ]
  },
  output: {
    filename: `./[name].js`,
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader'}, // translates CSS into CommonJS
          {loader: 'sass-loader'}, // compiles Less to CSS
        ],
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      path: path.resolve(__dirname, './dist/'),
      publicPath: '/dist/'  
  })
  ],

  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: './dist/',
    compress: false,
    port: 8080,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    publicPath: '/',
    quiet: true,
    proxy: [{
      context: ['**'],
      target: process.env.WEBPACK_PROXY || 'http://localhost:8081',
      secure: false,
      changeOrigin: true
    }]
  }
}
