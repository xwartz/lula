'use strict'

// import path from 'path'
import webpack from 'webpack'
import baseConfig from './webpack.config.base'

const p = 'http://localhost:3000'

export default {
  ...baseConfig,

  debug: true,

  devtool: 'source-map',

  entry: {
    ...baseConfig.entry,
    bundle: [
      'webpack-dev-server/client?' + p,
      'webpack/hot/only-dev-server',
      './client/index'
    ]
  },

  output: {
    ...baseConfig.output,
    publicPath: p + '/public/'
  },

  module: {
    ...baseConfig.module,
    loaders: [
      ...baseConfig.module.loaders,
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  plugins: [
    ...baseConfig.plugins,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
}
