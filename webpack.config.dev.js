'use strict'

import webpack from 'webpack'
import baseConfig from './webpack.config.base'

import globalConfig from './config'

const port = globalConfig.client.port

export default {
  ...baseConfig,

  debug: true,

  devtool: 'source-map',

  entry: {
    ...baseConfig.entry,
    // 重载 app, 热替换
    app: [
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      './index'
    ]
  },

  output: {
    ...baseConfig.output,
    // Hot Module Replacement
    publicPath: `http://localhost:${port}/`
  },

  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
}
