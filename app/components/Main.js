/**
 * Created by nathaliesicard on 3/17/16.
 */
var React = require('react');
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');
const ReactDriveIn = require("react-drive-in");
var BgVideo = require('./BgVideo');
var VolumeBtn = require('../components/VolumeBtn');

//var Main = React.createClass({
//
//  render: function() {
//    return (
//      <div>
//        <ReactDriveIn
//          show={bgVideoSrc}
//          poster={bgImgSrc}
//          loop
//        />
//        {this.props.children}
//      </div>
//    );
//  }
//});




var Main = React.createClass({
  mixins: [ ScreenTypeMixin ],

  getInitialState: function() {
    return { volume: 0 };
  },

  onVolumeClick: function() {
    if (this.state.volume == 0 ) {
      this.setState({ volume: 0.5 });
    } else if (this.state.volume == 0.5 ) {
      this.setState({ volume: 1 });
    } else {
      this.setState({ volume: 0 });
    }
  },

  render: function() {
    var icon;

    if (this.state.volume == 0) {
      icon = <i className="fa fa-volume-off"></i>
    }
    else if (this.state.volume === 0.5) {
      icon = <i className="fa fa-volume-down"></i>
    } else {
      icon = <i className="fa fa-volume-up"></i>
    }

    return (
      <div>
        <BgVideo volume={this.state.volume} />
        {this.props.children}
          <VolumeBtn onVolumeBtnClick={this.onVolumeClick}>
            {icon}
          </VolumeBtn>
      </div>
    );
  }
});

module.exports = Main;


