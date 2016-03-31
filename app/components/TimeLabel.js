/**
 * Created by nathaliesicard on 3/30/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var TimeFormatterMixin = require('./../mixins/TimeFormatterMixin');

var TimeLabel = React.createClass({
  mixins: [ TimeFormatterMixin ],
  render: function () {
    var timer = this.secondsToTime(this.props.timer);
    var duration = this.secondsToTime(this.props.duration);
    return (
      <div>
        <progress value={this.props.timer} max={this.props.duration}></progress>
        <br />
        {timer} / {duration}
      </div>
    );
  }
});

module.exports = TimeLabel;


