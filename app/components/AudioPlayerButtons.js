
var React = require('react');
var PropTypes = React.PropTypes;
var color = require('color');
var Radium = require('radium');
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');

var styles= {
  play: {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
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
    cursor: 'pointer',
    transition: 'box-shadow .2s ease-in-out',
    ':hover': {
      background: color('#0074d9').lighten(0.2).hexString(),
      boxShadow: '0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32)'
    }
  },
  pause: {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    lineHeight: '50px',
    border: '0px',
    borderRadius: '50%',
    textAlign: 'center',
    textDecoration: 'none',
    background: 'linear-gradient(60deg, #C3C3C3, #afafaf)',
    boxShadow: '0 0 3px gray',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer',
    transition: 'box-shadow .2s ease-in-out',
    ':hover': {
      boxShadow: '0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32)',
      background: color('#cccccc').hexString()
    }
  },
  close: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'baseline',
    justifyContent: 'center',
    lineHeight: '50px',
    border: '0px',
    borderRadius: '50%',
    textAlign: 'center',
    textDecoration: 'none',
    background: 'linear-gradient(60deg,#ff8688,#FF686B)',
    boxShadow: '0 0 3px gray',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer',
    transition: 'box-shadow .2s ease-in-out',
    ':hover': {
      background: color('#FF686B').lighten(0.2).hexString(),
      boxShadow: '0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32)'
    }
  },
  modalClose: {
    lineHeight: '40px',
    width: '100px',
    border: '0px',
    borderRadius: '5%',
    textAlign: 'center',
    textDecoration: 'none',
    background: 'linear-gradient(60deg,#ff8688,#FF686B)',
    boxShadow: '0 0 3px gray',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer',
    margin: '10px',
    transition: 'box-shadow .2s ease-in-out',
    ':hover': {
      background: color('#FF686B').darken(0.1).hexString(),
      boxShadow: '0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32)',
      textDecoration: 'none'
    }
  },
  modalCancel: {
    lineHeight: '40px',
    width: '100px',
    border: '0px',
    borderRadius: '5%',
    textAlign: 'center',
    textDecoration: 'none',
    background: 'linear-gradient(60deg,#acacac,#C7C7C7)',
    boxShadow: '0 0 3px gray',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer',
    margin: '10px',
    transition: 'box-shadow .2s ease-in-out',
    ':hover': {
      background: color('#757575').darken(0.1).hexString(),
      boxShadow: '0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32)',
      textDecoration: 'none'
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
      <button onClick={this.props.onPlayBtnClick} style={styles.play}>
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
      <button onClick={this.props.onPauseBtnClick} style={styles.pause}>
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
      <button onClick={this.props.onStopBtnClick} style={styles.close}>
        <i className="fa fa-times"></i>
      </button>
    );
  }
});

var ModalCloseBtn = React.createClass({
  mixins: [ScreenTypeMixin],
  render: function () {
    return (
      <button style={styles.modalClose}>
        <i className="fa fa-times-circle"></i> Terminar
      </button>
    );
  }
});

var ModalCancelBtn = React.createClass({
  propTypes: {
    closeModal: React.PropTypes.func.isRequired
  },
  mixins: [ScreenTypeMixin],
  render: function () {
    return (
      <button onClick={this.props.closeModal} style={styles.modalCancel}>
        <i className="fa fa-arrow-circle-left"></i> Cancelar
      </button>
    );
  }
});

module.exports = {
  PlayButton: Radium(PlayButton),
  PauseButton: Radium(PauseButton),
  StopButton: Radium(StopButton),
  ModalCloseBtn: Radium(ModalCloseBtn),
  ModalCancelBtn: Radium(ModalCancelBtn)
};