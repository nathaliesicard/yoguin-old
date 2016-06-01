/**
 * Created by nathaliesicard on 5/31/16.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var color = require('color');
var Radium = require('radium');
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');


var PlayOrDownloadBtn = React.createClass({
  mixins: [ScreenTypeMixin],
  propTypes: {
    url: React.PropTypes.string.isRequired,
    handleClickForPlay: React.PropTypes.func.isRequired
  },
  getInitialState: function (){
    return {
      status: 'NOT_KNOWN', // 'NOT_KNOWN', 'FOUND', 'NOT_FOUND', 'DOWNLOADING'
      file: this.props.url
    }
  },
  
  
  render: function () {
    var styles = {
      button: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: this.state.screenType == 'DESKTOP' ? '4.5em' : '3em',
        height: this.state.screenType == 'DESKTOP' ? '4.5em' : '3em',
        lineHeight: '5.5em',
        border: '0px',
        borderRadius: '50%',
        textAlign: 'center',
        textDecoration: 'none',
        background: 'linear-gradient(50deg,#ff5a5f,#ff6a6f)',
        boxShadow: '0 0 3px gray',
        fontSize: this.state.screenType == 'DESKTOP' ? '1em' : '1em',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: this.state.screenType == 'DESKTOP' ? '5px' : '1px',
        transition: 'box-shadow .2s ease-in-out',
        ':hover': {
          background: color('#ff7e82').hexString()
        }
      }
    };

    var button;

    if (this.state.screenType == 'DESKTOP') {
      button = <button style={styles.button} onClick={this.props.handleClickForPlay}><i className="fa fa-play"></i></button>
    }
      
    return (
      <div>
    {button}
        </div>
    );
  }
});



module.exports = Radium(PlayOrDownloadBtn);