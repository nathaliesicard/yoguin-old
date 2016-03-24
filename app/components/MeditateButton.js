/**
 * Created by nathaliesicard on 3/24/16.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var HomeButtonsContainer = require('../containers/HomeButtonsContainer');
var color = require('color');
var Radium = require('radium');


var styles = {
  base: {
    display: 'block',
    width: '60px',
    height: '60px',
    lineHeight: '50px',
    border: '0px',
    borderRadius: '50%',
    textAlign: 'center',
    textDecoration: 'none',
    background: 'linear-gradient(60deg,#3479dd,#344fdd)',
    boxShadow: '0 0 3px gray',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    transition: 'box-shadow .2s ease-in-out',
    ':hover': {
      background: color('#0074d9').lighten(0.2).hexString()
    }
  }
};

function MeditateButton(props){
    return (
      <HomeButtonsContainer>
        <Link to='meditar'>
          <button
            style={styles.base}>
            {props.children}
          </button>
        </Link>
      </HomeButtonsContainer>
    );
}



module.exports = Radium(MeditateButton);