/**
 * Created by nathaliesicard on 3/16/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
require("./sass/app.scss");
require("./assets/fonts/google-fonts/Cookie/cookie.scss");
require("./assets/fonts/google-fonts/Montserrat/montserrat-bold.scss");
require("./assets/fonts/google-fonts/Montserrat/montserrat-regular.scss");
require("./assets/fonts/google-fonts/Lato/lato-bold.css");
require("./assets/fonts/google-fonts/Lato/lato-regular.css");
require("./assets/fonts/google-fonts/Raleway/raleway-bold.scss");
require("./assets/fonts/google-fonts/Raleway/raleway-semibold.scss");
require("./assets/fonts/google-fonts/Brandon-Grotesque/BrandonGrotesque-Bold.scss");
require("./assets/fonts/google-fonts/Brandon-Grotesque/BrandonGrotesque-Medium.scss");
require("./assets/fonts/font-awesome/css/font-awesome.css");
require('bootstrap');
require.context('./assets/images', true, /^\.\//);
require.context('./assets/audios', true, /^\.\/.*\.mp3$/);


ReactDOM.render(
  routes,
  document.getElementById('app')
);


