/**
 * Created by nathaliesicard on 3/29/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var color = require('color');
var Radium = require('radium');
var bgVideoSrc = require('../assets/videos/video_2.mp4');
var bgVideoSrcTwo = require('../assets/videos/video_2.webm');

var bgImgSrc = require('../assets/images/poster.jpg');


  var styles = {
    video: {
      position: 'fixed',
      right: 0,
      bottom: 0,
      width: 'auto',
      minWidth: '100%',
      height: 'auto',
      minHeight: '100%',
      zIndex: -100,
      background: 'transparent url(' + bgImgSrc + ') no-repeat cover'
    }
  };


var BgVideo = React.createClass({
  getInitialState: function (){
    return {
      duration: 0
    }
  },
  componentDidMount: function() {
    var video = this.refs.bgVideo;
    var self = this;

    // One way to do the artificial video loop
    /*
      video.addEventListener('error', function () {
      video.load();
      video.play();
      }, false);
      */
    video.addEventListener('timeupdate', function(){
      console.log('Timeupdate: ',video.currentTime)
      if (video.currentTime > 7) {
        console.log('Restarted');
        video.currentTime = 0;
        video.play();
      }
    });
    video.addEventListener('durationchange', function(){
      self.setState({
        duration: video.duration
      });
    });
    if (typeof video.loop == 'boolean') { // loop supported
      video.loop = true;
    }

  },

  render: function() {


    return (
      <video ref="bgVideo" loop autoPlay="true" poster={bgImgSrc} style={styles.video}>
        <source src={bgVideoSrc} type="video/mp4"/>
        <source src={bgVideoSrcTwo} type="video/webm"/>
      </video>

    );
  }
});

module.exports = Radium(BgVideo);