'use strict';

module.exports = {
  context: __dirname + '/app',
  entry: './boot.ts',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.html/, loader: 'raw' }
    ]
  }
};
