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

      var styles = {
        homepageBrand: {
          background: 'transparent',
          fontFamily: 'Cookie, cursive',
          fontSize: this.state.screenType =='DESKTOP' ? '6em' : '8em',
          fontWeight: 900,
          color: '#fff',
          marginBottom:'0.25em',
          zIndex: -4
        },
        homepageDesc: {
          fontFamily: 'Raleway, sans-serif',
          fontWeight: this.state.screenType =='DESKTOP' ? 400 : 500,
          color: '#fff',
          fontSize: this.state.screenType =='DESKTOP' ? '1.5em' : '3.5em',
          zIndex: -4
        }
      };
    
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