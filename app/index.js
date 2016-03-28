/**
 * Created by nathaliesicard on 3/16/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
require("./sass/app.scss");
require('bootstrap');
require.context('./assets/images', true, /^\.\//);
require.context('./assets/audios', true, /^\.\/.*\.mp3$/);


ReactDOM.render(
  routes,
  document.getElementById('app')
);


