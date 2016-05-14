/**
 * Created by nathaliesicard on 4/24/16.
 */

var React = require('react');
var PropTypes = React.PropTypes;
var color = require('color');
var Radium = require('radium');
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');

var styles = {
  button: {
    width: '45px',
    height: '45px',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: '5%',
    left: '85%',
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
    zIndex: -2,
    transition: 'box-shadow .2s ease-in-out',
    ':hover': {
      boxShadow: '0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32)',
      background: color('#cccccc').hexString()
    }
  }
};

var VolumeBtn = React.createClass({
  propTypes: {
    onVolumeBtnClick: React.PropTypes.func.isRequired
  },
  mixins: [ScreenTypeMixin],
  render: function () {
    return (
      <button onClick={this.props.onVolumeBtnClick} style={styles.button}>
        {this.props.children}
      </button>
    );
  }
});


module.exports = Radium(VolumeBtn);
