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

var data = [
  {
    name: 'Meditación 1',
    quip: 'Learn to appreciate what you have',
    duration: 15,
    url: "/app/assets/Meditacion_1.mp3"
  },
  {
    name: 'Meditación 2',
    quip: 'Find your inner peace',
    duration: 10,
    url: "/app/assets/Meditacion_2.mp3"
  }

]

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='meditar' data={data} component={MeditationListContainer} />
      <Route path='play' component={MeditationPlayContainer} />
    </Route>
  </Router>
);

module.exports = routes;
