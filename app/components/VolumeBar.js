/**
 * Created by nathaliesicard on 3/30/16.
 */
var React = require('react');
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');


var VolumeBar = React.createClass({
  mixins: [ ScreenTypeMixin ],

  render: function() {

    if (this.state.screenType =='DESKTOP') {
      var styles = {
        container: {
          display: 'flex',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '40vh'
        },
        minMaxBtn: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50%',
          lineHeight: '50px',
          background: 'transparent',
          textAlign: 'center',
          cursor: 'pointer'
        },
        volumeBar: {
          width: '100%',
          lineHeight: '50px',
          background: 'transparent',
          textAlign: 'center',
          cursor: 'pointer'

        },
        glyph: {
          fontSize: '1.5em',
          color: '#3479dd'
        }
      };
    } else {
      var styles = {
        container: {
          display: 'flex',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '40vh'
        },
        minMaxBtn: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50%',
          lineHeight: '50px',
          background: 'transparent',
          textAlign: 'center',
          cursor: 'pointer'
        },
        volumeBar: {
          width: '100%',
          lineHeight: '50px',
          background: 'transparent',
          textAlign: 'center',
          cursor: 'pointer'

        },
        glyph: {
          fontSize: '3em',
          color: '#3479dd'
        }
      };
    }

    var percent = this.props.volume * 100;
    var style = {top: (100 - percent) + "%"};

    return (
      <div style={styles.container}>
        <div style={styles.minMaxBtn} onClick={this.volumeToMin}>
          <Glyphicon glyph="volume-off" style={styles.glyph} />
        </div>
        <progress ref="volumeBar"
                  value={percent} max='100'
                  onClick={this.adjustVolumeTo}
                  style={styles.volumeBar}>
        </progress>
        <div style={styles.minMaxBtn} onClick={this.volumeToMax}>
          <Glyphicon glyph="volume-up" style={styles.glyph}/>
        </div>
      </div>
    );
  },
  adjustVolumeTo: function(e) {
    var container = $(this.refs.volumeBar);
    var containerStartX = container.offset().left;
    var percent = (e.clientX - containerStartX) / container.width();
    percent = percent;
    console.log('Percent : ',percent);
    this.props.adjustVolumeTo(percent);
  },


  volumeToMax: function() {
    this.props.adjustVolumeTo(1);
  },

  volumeToMin: function() {
    this.props.adjustVolumeTo(0);
  }

});

module.exports = VolumeBar;