/**
 * Created by nathaliesicard on 3/29/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var color = require('color');
var Radium = require('radium');
var bgVideoSrc = require('../assets/videos/video.mp4');
var bgImgSrc = require('../assets/images/bg.jpg');


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
      background: 'transparent url('+ bgImgSrc +') no-repeat cover'
    }
  };

  return (
    <video autoPlay="true" loop style={styles.video}>
        <source src={bgVideoSrc} type="video/mp4" />
    </video>

  );
}

module.exports = Radium(BgVideo);