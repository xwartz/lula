'use strict'

import path from 'path'
import webpack from 'webpack'
import precss from 'precss'
import autoprefixer from 'autoprefixer'

export default {
  cache: true,

  context: path.join(__dirname, './client'),

  entry: {
    app: './index.js',
    html: './index.html',
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-router-redux',
      'react-redux',
      'redux',
      'redux-thunk',
      'redux-actions',
      'lodash',
      'normalizr',
      'isomorphic-fetch',
      'humps'
    ]
  },

  output: {
    path: path.join(__dirname, './static'),
    publicPath: '/static/',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [{
      test: /\.(html)$/,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.(json)$/,
      loader: 'json'
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'url'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url?limit=10000!img?progressive=true'
    }, {
      test: /\.scss$/,
      loader: 'style!css!postcss'
    }]
  },

  postcss () {
    return [precss, autoprefixer]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      components: path.join(__dirname, 'client/components'),
      actions: path.join(__dirname, 'client/actions')
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.OccurenceOrderPlugin()
  ],

  externals: [
    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
  ]
}
