'use strict'

const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: {
    main: ['./src/js/main.js'] // TODO add entrypoint for scss
  },
  output: {
    filename: `./[name].js`,
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   use: 'eslint-loader',
      //   enforce: 'pre'
      // },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
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
