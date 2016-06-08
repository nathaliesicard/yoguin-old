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
var logo = require('../assets/images/logo.png');


var Home = React.createClass({
  mixins: [ ScreenTypeMixin ],
  render: function() {

      var styles = {
        homepageBrand: {
          background: 'transparent',
          fontFamily: 'BrandonGrotesque-Medium, sans-serif',
          fontSize: this.state.screenType =='DESKTOP' ? '6em' : '5em',
          color: '#fff',
          margin:'0px',
          zIndex: -4
        },
        brand: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          marginTop: this.state.screenType =='DESKTOP' ? '25px' : '20px',
        },
        logo: {
         width: '100px',
          height: '58px',
          alignSelf: 'center'
        }
      };
    
    return (
      <MainContainer>
        <div style={styles.brand}>
          <img src={logo} alt="Yoguin Logo" style={styles.logo}/>
          <h1 style={styles.homepageBrand}>Yoguin</h1>
        </div>
        <MeditateButton>Entrar</MeditateButton>
      </MainContainer>
    );
  }
});

module.exports = Radium(Home);