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
        width:  '6em',
        height: '2.5em',
        lineHeight: '50px',
        border: '0px',
        borderRadius: '5%',
        textAlign: 'center',
        textDecoration: 'none',
        background: 'linear-gradient(60deg,#00B59F,#24BFA0)',
        boxShadow: '0 0 3px gray',
        fontSize: '1.7em',
        fontWeight: 'bold',
        fontFamily: 'BrandonGrotesque-Medium',
        color: '#fff',
        transition: 'box-shadow .2s ease-in-out',
        ':hover': {
          background: color('#0074d9').lighten(0.2).hexString(),
          textDecoration: 'none'
        }
      };

    var noUnderline ={
      textDecoration: 'none'
    };
    
    if (this.state.screenType != 'DESKTOP') {
      baseStyle.width = '7em';
      baseStyle.height = '3em';
      baseStyle.fontSize = '1.2em';
    }

    return (
      <HomeButtonsContainer>
        <Link to='meditar' style={noUnderline}>
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