
var React = require('react');
var PropTypes = React.PropTypes;
var color = require('color');
var Radium = require('radium');

var styles= {
  button: {
    width: '60px',
    height: '60px',
    background: 'pink',
    borderRadius: '50%'
  }
};

function PlayButton(props) {
  return (
    <button onClick={props.onPlayBtnClick} style={styles.button}>
      <i className="fa fa-play"></i>
    </button>
  )
}

PlayButton.propTypes = {
  onPlayBtnClick: PropTypes.func.isRequired
};

function PauseButton(props) {
  return (
    <button style={styles.button}>
      <i className="fa fa-pause"></i>
    </button>
  )
}

module.exports = {
  PlayButton: Radium(PlayButton),
  PauseButton: Radium(PauseButton)

}