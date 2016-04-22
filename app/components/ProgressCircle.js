/**
 * Created by nathaliesicard on 4/3/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var PlayButton = require('../components/AudioPlayerButtons').PlayButton;
var PauseButton = require('../components/AudioPlayerButtons').PauseButton;


var ProgressCircle = React.createClass({
  getDefaultProps: function() {
    return {
      radius: 50,
      percentage: 0,
      strokeWidth: 1
    };
  },
  render: function () {
    const radius = this.props.radius - this.props.strokeWidth / 2;
    const width = this.props.radius * 2;
    const height = this.props.radius * 2;
    const viewBox = `0 0 ${width} ${height}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;

    return (
      <svg
        className="CircularProgress"
        width={this.props.radius * 2}
        height={this.props.radius * 2}
        viewBox={viewBox}>
        <circle
          className="CircularProgress-Bg"
          cx={this.props.radius}
          cy={this.props.radius}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`} />
        <circle
          className="CircularProgress-Fg"
          cx={this.props.radius}
          cy={this.props.radius}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
          style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset
                    }} />

      </svg>
    );

  }
});

module.exports = ProgressCircle;


