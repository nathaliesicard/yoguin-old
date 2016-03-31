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


function BgVideo(props){

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
      background: 'url('+ bgImgSrc +') no-repeat cover'
    }
  };

  return (
    <video autoPlay="true" loop style={styles.video}>
        <source src={bgVideoSrc} type="video/mp4" />
        <source src={bgVideoSrcTwo} type="video/webm" />
    </video>

  );
}

module.exports = Radium(BgVideo);