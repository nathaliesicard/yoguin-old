/**
 * Created by nathaliesicard on 3/30/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var TimeFormatterMixin = require('./../mixins/TimeFormatterMixin');

var styles= {
  timer: {
    textAlign: 'center',
    fontWeight: 600,
    fontFamily: 'sans-serif',
    fontSize: '2em',
    color: '#3479dd',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
};


var Timer = React.createClass({
  mixins: [ TimeFormatterMixin ],
  componentDidMount: function() {

  },
  render: function () {
    var timer = this.secondsToTime(this.props.timer);

    return (
       <div style={styles.timer}>          
         {timer}
       </div>
    );
  }
});

module.exports = Timer;


