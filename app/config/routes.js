/**
 * Created by nathaliesicard on 3/17/16.
 */

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var MeditationListContainer = require('../containers/MeditationListContainer');
var MeditationPlayContainer = require('../containers/MeditationPlayContainer');



var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='meditar' component={MeditationListContainer} />
      <Route path='play' component={MeditationPlayContainer} />
    </Route>
  </Router>
);

module.exports = routes;
