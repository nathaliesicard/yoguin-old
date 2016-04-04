/**
 * Created by nathaliesicard on 3/24/16.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var HomeButtonsContainer = require('../containers/HomeButtonsContainer');
var color = require('color');
var Radium = require('radium');
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');



var MeditateButton = React.createClass({
  mixins: [ScreenTypeMixin],
  render: function () {
    if (this.state.screenType =='DESKTOP') {
      var styles = {
        base: {
          display: 'block',
          width: '4em',
          height: '4em',
          lineHeight: '50px',
          border: '0px',
          borderRadius: '50%',
          textAlign: 'center',
          textDecoration: 'none',
          background: 'linear-gradient(60deg,#3479dd,#344fdd)',
          boxShadow: '0 0 3px gray',
          fontSize: '1.2em',
          fontWeight: 'bold',
          color: '#fff',
          transition: 'box-shadow .2s ease-in-out',
          ':hover': {
            background: color('#0074d9').lighten(0.2).hexString()
          }
        }
      };
    } else {
      var styles = {
        base: {
          display: 'block',
          width: '6em',
          height: '6em',
          lineHeight: '50px',
          border: '0px',
          borderRadius: '50%',
          textAlign: 'center',
          textDecoration: 'none',
          background: 'linear-gradient(60deg,#3479dd,#344fdd)',
          boxShadow: '0 0 3px gray',
          fontSize: '2em',
          fontWeight: 'bold',
          color: '#fff',
          transition: 'box-shadow .2s ease-in-out',
          ':hover': {
            background: color('#0074d9').lighten(0.2).hexString()
          }
        }
      };
    }
    return (
      <HomeButtonsContainer>
        <Link to='meditar'>
          <button
            style={styles.base}>
            {this.props.children}
          </button>
        </Link>
      </HomeButtonsContainer>
    );
  }
});



module.exports = Radium(MeditateButton);