/**
 * Created by nathaliesicard on 3/29/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var color = require('color');
var Radium = require('radium');
var bgVideoSrc = require('../assets/videos/Beach.mp4');
var bgVideoSrcTwo = require('../assets/videos/Beach.webm');
var bgImgSrc = require('../assets/images/poster.jpg');
var VolumeBtn = require('../components/VolumeBtn');
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');




var BgVideo = React.createClass({
  mixins: [ScreenTypeMixin],
  propTypes: {
    volume: React.PropTypes.number.isRequired
  },
  getInitialState: function (){
    return {
      //duration: 0,
      errored: false
    }
  },
  //componentDidMount: function() {
  //  var video = this.refs.bgVideo;
  //  var self = this;
  //
  //  // One way to do the artificial video loop
  //  /*
  //    video.addEventListener('error', function () {
  //    video.load();
  //    video.play();
  //    }, false);
  //    */
  //  video.addEventListener('timeupdate', function(){
  //    console.log('Timeupdate: ',video.currentTime)
  //   /* if (video.currentTime > 7) {
  //      console.log('Restarted');
  //      video.currentTime = 0;
  //      video.play();
  //    }*/
  //  });
  //  video.addEventListener('error', function(err){
  //    console.error('Error event',err.error);
  //  });
  //  video.addEventListener('durationchange', function(){
  //    self.setState({
  //      duration: video.duration
  //    });
  //  });
  //  if (typeof video.loop == 'boolean') { // loop supported
  //    video.loop = true;
  //  }
  //
  //},


  errored: function() {
    this.setState({
      errored: true
    });
  },

  render: function() {

    var styles = {
      video: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: 'auto',
        minHeight: '50%',
        minWidth: '50%',
        zIndex: -1000,
        transform: 'translate(-50%, -50%)'

      },
      container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat'
      }
    };

    if (this.state.errored) {
      return (
        <img src={bgImgSrc} style={styles.video} />
      );
    }

    return (
      <div style={styles.container}>
      <video loop autoPlay="true" ref="theVideo" poster={bgImgSrc} style={styles.video} onError={this.errored}>
        <source src={bgVideoSrc} type="video/mp4"/>
        <source src={bgVideoSrcTwo} type="video/webm"/>
      </video>
      </div>
    );
  },

  componentDidMount: function() {
    this.adjustBgVolumeTo(this.props.volume);
    //console.log('Volume is: ',this.props.volume);
  },

  componentWillUpdate: function(nextProps, nextState) {
    if (this.props.volume !== nextProps.volume) {
       this.adjustBgVolumeTo(nextProps.volume);
     }
  },

  adjustBgVolumeTo: function(percent) {
    if (this.refs.theVideo) {
      this.refs.theVideo.volume = percent;
    }
  }
});

module.exports = Radium(BgVideo);