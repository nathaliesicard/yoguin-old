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
      // { test: /\.(png|jpg|jpeg|gif|ico)$/, loader: 'url-loader?limit=8192' },
      {
        test: /\.(jpg|jpeg|gif|png|ico)$/,
        exclude: /node_modules/,
        loader:'file-loader?name=img/[path][name].[ext]&context=./app/assets/images'
      },
      {test: /\.(webm|mp4)$/, loader: 'file'},
      {test: /\.(wav|mp3)$/,
        loader: 'file-loader?name=audio/[path][name].[ext]&context=./app/assets/audios'}
    ]
  },
  output: {
    filename: "index_bundle.js",
    path:__dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
};
