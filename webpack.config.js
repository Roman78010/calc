'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    // module - какие модули мы будем использовать.
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        // exclude - какие файлы мы должны исключить из выборки test.
        use:
        // use - говрит как и что мы будем использовать.
         {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }
};
