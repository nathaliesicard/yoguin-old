/**
 * Created by nathaliesicard on 3/30/16.
 */
var React = require('react');
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;

var VolumeBar = React.createClass({

  render: function() {

    var percent = this.props.volume * 100;
    var style = {top: (100 - percent) + "%"};

    return (
      <div ref="audioVolumeBarContainer" className="audio-volume-bar-container">
        <progress ref="volumeBar" value={percent} max='100' onClick={this.adjustVolumeTo}></progress>
        <div className="audio-volume-min-max" onClick={this.volumeToMax}>
          <Glyphicon glyph="volume-up" />
        </div>

        <div className="audio-volume-bar">

          <div ref="audioVolumePercentContainer" className="audio-volume-percent-container" >

            <div className="audio-volume-percent" style={style}></div>

          </div>
        </div>
        <div className="audio-volume-min-max" onClick={this.volumeToMin}>
          <Glyphicon glyph="volume-off" />
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

  //adjustVolumeTo: function(e) {
  //  var container = $(this.refs.audioVolumePercentContainer);
  //  var containerStartY = container.offset().top;
  //  var percent = (e.clientY - containerStartY) / container.height();
  //  percent = 1 - percent;
  //  this.props.adjustVolumeTo(percent);
  //},

  volumeToMax: function() {
    this.props.adjustVolumeTo(1);
  },

  volumeToMin: function() {
    this.props.adjustVolumeTo(0);
  }

});

module.exports = VolumeBar;