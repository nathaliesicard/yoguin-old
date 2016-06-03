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
    
    var baseStyle = {
        display: 'block',
        width:  '4.5em',
        height: '4.5em',
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
      };
    
    if (this.state.screenType != 'DESKTOP') {
      baseStyle.width = '4em';
      baseStyle.height = '4em';
      baseStyle.fontSize = '1em';
    }

    return (
      <HomeButtonsContainer>
        <Link to='meditar'>
          <button
            style={baseStyle}>
            {this.props.children}
          </button>
        </Link>
      </HomeButtonsContainer>
    );
  }
});



module.exports = Radium(MeditateButton);