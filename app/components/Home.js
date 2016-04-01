/**
 * Created by nathaliesicard on 3/17/16.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('../containers/MainContainer');
var MeditateButton= require('./MeditateButton');
var color = require('color');
var Radium = require('radium');

var styles = {
  homepageBrand: {
    background: 'transparent',
    fontFamily: 'Cookie, cursive',
    fontSize: '60px',
    fontWeight: 900,
    color: '#fff'
  },
  homepageDesc: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 400,
    color: '#fff',
    fontSize: '25px'
  }
};

var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <h1 style={styles.homepageBrand}>Yoguin</h1>
        <p className='lead' style={styles.homepageDesc}>App de Meditación Guiada</p>
        <MeditateButton><i className="fa fa-plus"></i></MeditateButton>
      </MainContainer>
    );
  }
});

module.exports = Home;