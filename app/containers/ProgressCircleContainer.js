/**
 * Created by nathaliesicard on 3/30/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var TimeFormatterMixin = require('./../mixins/TimeFormatterMixin');
var ProgressCircle = require('../components/ProgressCircle');

var styles= {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
};


var ProgressCircleContainer = React.createClass({
  mixins: [ TimeFormatterMixin ],
  componentDidMount: function() {

  },
  render: function () {
    var timer = this.secondsToTime(this.props.timer);
    var duration = this.secondsToTime(this.props.duration);
    var percentage = Math.round((this.props.timer / this.props.duration) * 100);
    console.log('Timer: ',timer+'Duration: ',duration + 'Percentage ',percentage);


    return (
      <div>
          <ProgressCircle
            strokeWidth="30"
            radius="90"
            percentage={percentage}
            timer={timer}
            duration={duration}
            status={this.props.status}/>
      </div>
    );
  }
});

module.exports = ProgressCircleContainer;


