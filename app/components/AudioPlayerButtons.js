
var React = require('react');
var PropTypes = React.PropTypes;
var color = require('color');
var Radium = require('radium');
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');

var styles= {
  button: {
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    lineHeight: '50px',
    border: '0px',
    borderRadius: '50%',
    textAlign: 'center',
    textDecoration: 'none',
    background: '#949494',
    boxShadow: '0 0 3px gray',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer',
    transition: 'box-shadow .2s ease-in-out',
    ':hover': {
      background: color('#cccccc').hexString()
    }
  }
};

var PlayButton = React.createClass({
  propTypes: {
    onPlayBtnClick: React.PropTypes.func.isRequired
  },
  mixins: [ScreenTypeMixin],
  render: function () {
    return (
      <button onClick={this.props.onPlayBtnClick} style={styles.button}>
        <i className="fa fa-play"></i>
      </button>
    );
  }
});

var PauseButton = React.createClass({
  propTypes: {
    onPauseBtnClick: React.PropTypes.func.isRequired
  },
  mixins: [ScreenTypeMixin],
  render: function () {
    return (
      <button onClick={this.props.onPauseBtnClick} style={styles.button}>
        <i className="fa fa-pause"></i>
      </button>
    );
  }
});

var StopButton = React.createClass({
  propTypes: {
    onStopBtnClick: React.PropTypes.func.isRequired
  },
  mixins: [ScreenTypeMixin],
  render: function () {
    return (
      <button onClick={this.props.onStopBtnClick} style={styles.button}>
        <i className="fa fa-stop"></i>
      </button>
    );
  }
});



module.exports = {
  PlayButton: Radium(PlayButton),
  PauseButton: Radium(PauseButton),
  StopButton: Radium(StopButton)
}