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
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');



var Home = React.createClass({
  mixins: [ ScreenTypeMixin ],
  render: function() {

    if (this.state.screenType =='DESKTOP') {
      var styles = {
        homepageBrand: {
          background: 'transparent',
          fontFamily: 'Cookie, cursive',
          fontSize: '6em',
          fontWeight: 900,
          color: '#fff'
        },
        homepageDesc: {
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 400,
          color: '#fff',
          fontSize: '1.5em'
        }
      };
    } else {
      var styles = {
        homepageBrand: {
          background: 'transparent',
          fontFamily: 'Cookie, cursive',
          fontSize: '7em',
          fontWeight: 900,
          color: '#fff'
        },
        homepageDesc: {
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 500,
          color: '#fff',
          fontSize: '3.5em'
        }
      }

    }

    return (
      <MainContainer>
        <h1 style={styles.homepageBrand}>Yoguin</h1>
        <p className='lead' style={styles.homepageDesc}>App de Meditación Guiada</p>
        <MeditateButton><i className="fa fa-plus"></i></MeditateButton>
      </MainContainer>
    );
  }
});

module.exports = Radium(Home);