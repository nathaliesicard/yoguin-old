/**
 * Created by nathaliesicard on 3/17/16.
 */
var React = require('react');
const ReactDriveIn = require("react-drive-in");

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <ReactDriveIn
          show="./app/assets/video-5.mp4"
          poster="./app/assets/bg.jpg"
        />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;


