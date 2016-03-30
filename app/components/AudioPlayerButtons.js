
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
    <button onClick={props.onPauseBtnClick} style={styles.button}>
      <i className="fa fa-pause"></i>
    </button>
  )
}

PauseButton.propTypes = {
  onPauseBtnClick: PropTypes.func.isRequired
};

function StopButton(props) {
  return (
    <button onClick={props.onStopBtnClick} style={styles.button}>
      <i className="fa fa-stop"></i>
    </button>
  )
}

StopButton.propTypes = {
  onStopBtnClick: PropTypes.func.isRequired
};


module.exports = {
  PlayButton: Radium(PlayButton),
  PauseButton: Radium(PauseButton),
  StopButton: Radium(StopButton)
}