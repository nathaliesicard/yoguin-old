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
  },
  timer: {
    textAlign: 'center',
    fontWeight: 600,
    fontFamily: 'sans-serif',
    fontSize: '2em',
    color: '#3479dd',
    marginTop: '20px'
  }
};


var TimeLabel = React.createClass({
  mixins: [ TimeFormatterMixin ],
  componentDidMount: function() {

  },
  render: function () {
    var timer = this.secondsToTime(this.props.timer);
    var duration = this.secondsToTime(this.props.duration);
    var percentage = Math.round((this.props.timer / this.props.duration) * 100);
    console.log('Timer: ',timer+'Duration: ',duration + 'Percentage ',percentage);


    return (
      <div style={styles.center}>
          <ProgressCircle
            strokeWidth="10"
            radius="100"
            percentage={percentage}
            timer={timer}
            duration={duration}
            status={this.props.status}/>
          <div style={styles.timer}>
            {timer}
          </div>
      </div>
    );
  }
});

module.exports = TimeLabel;


