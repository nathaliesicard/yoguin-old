/**
 * Created by nathaliesicard on 3/1/16.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: __dirname + '/app', loader: "babel-loader"},
      {test: /\.scss$/, loaders: ["style", "css", "sass"]},
      {test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {test: /\.(webm|mp4)$/, loader: 'file'}
    ]
  },
  output: {
    filename: "index_bundle.js",
    path:__dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
};
