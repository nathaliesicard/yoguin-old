/**
 * Created by nathaliesicard on 3/30/16.
 */
var React = require('react');
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;


var styles = {

 audioVolumeBarContainer: {
   display: 'flex',
   paddingLeft: '2px',
   paddingTop: '2px'

 },
  audioVolumeBar: {
    position: 'absolute',
    zIndex: 1001,
    background: '#ddd'
  }
};


var VolumeBar = React.createClass({

  render: function() {

    var percent = this.props.volume * 100;
    var style = {top: (100 - percent) + "%"};
    var toggleIcon = this.props.volume == 0 ? "volume-off" : "volume-up";

    return (
      <div ref="audioVolumeBarContainer" className="audio-volume-bar-container">
        <div className="audio-volume-bar">
          <div className="audio-volume-min-max" onClick={this.volumeToMax}>
            <Glyphicon glyph="volume-up" />
          </div>
          <div ref="audioVolumePercentContainer" className="audio-volume-percent-container" onClick={this.adjustVolumeTo}>
            <div className="audio-volume-percent" style={style}></div>
          </div>
          <div className="audio-volume-min-max" onClick={this.volumeToMin}>
            <Glyphicon glyph="volume-off" />
          </div>
        </div>
      </div>
    );
  },

  adjustVolumeTo: function(e) {
    var container = $(this.refs.audioVolumePercentContainer.getDOMNode());
    var containerStartY = container.offset().top;
    var percent = (e.clientY - containerStartY) / container.height();
    percent = 1 - percent;
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