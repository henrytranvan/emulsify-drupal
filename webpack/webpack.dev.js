const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const plugins = require('./plugins');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [plugins.BrowserSyncPlugin],
});
