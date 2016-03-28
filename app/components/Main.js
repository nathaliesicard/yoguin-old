/**
 * Created by nathaliesicard on 3/17/16.
 */
var React = require('react');
const ReactDriveIn = require("react-drive-in");

var bgImgSrc = require('../assets/bg.jpg');

var bgVideoSrc = require('../assets/video-5.mp4');

var Main = React.createClass({

  render: function() {
    return (
      <div className="main-container">
        <ReactDriveIn
          show={bgVideoSrc}
          poster={bgImgSrc}
        />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;


