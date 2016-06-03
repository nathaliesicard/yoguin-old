/**
 * Created by nathaliesicard on 3/25/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var AudioPlayer = require('./AudioPlayer');
var MeditationList = require('../components/MeditationList');
var color = require('color');
var Radium = require('radium');

var styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    border: '0px',
    textAlign: 'center',
    textDecoration: 'none',
    background: 'rgb(255, 54, 54)',
    background: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '500',
    fontFamily: 'BrandonGrotesque-Medium, sans-serif',
    color: '#333',
    transition: 'box-shadow .2s ease-in-out',
    zIndex: -3
  },
  header: {
    fontWeight: '900',
    fontSize: '6vmin'
  }
};


function MeditationPlay(props) {
  var meditation = props;
  return (
  <div className = "col-xs-10 col-xs-offset-1 text-center" style={styles.base}>
    <AudioPlayer meditation={props} />
  </div>

  )
}

MeditationPlay.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  quip: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired
};

module.exports = MeditationPlay;