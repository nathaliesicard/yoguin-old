/**
 * Created by nathaliesicard on 3/24/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var MeditationItem = require('./MeditationItem');
var color = require('color');
var Radium = require('radium');

var styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    border: '0px',
    textAlign: 'center',
    textDecoration: 'none',
    background: 'rgb(255, 54, 54)',
    background: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '500',
    fontFamily: 'Raleway-SemiBold, sans-serif',
    color: '#333',
    transition: 'box-shadow .2s ease-in-out'
  },
  header: {
    fontWeight: '900',
    fontSize: '6vmin'
  }
};

function MeditationList(props) {
  return (
    <div className = "col-xs-10 col-xs-offset-1 text-center" style={styles.base}>
      <h2 style={styles.header}>{props.header}</h2>
      {props.children}
    </div>
  )
}


module.exports = Radium(MeditationList);