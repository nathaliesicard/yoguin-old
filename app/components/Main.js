/**
 * Created by nathaliesicard on 3/17/16.
 */
var React = require('react');
const ReactDriveIn = require("react-drive-in");

var bgImgSrc = require('../assets/images/bg.jpg');

var bgVideoSrc = require('../assets/videos/video-5.mp4');

var Main = React.createClass({

  render: function() {
    return (
      <div>
        <ReactDriveIn
          show={bgVideoSrc}
          poster={bgImgSrc}
          loop
        />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;


