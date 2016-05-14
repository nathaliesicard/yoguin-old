/**
 * Created by nathaliesicard on 3/30/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var TimeFormatterMixin = require('./../mixins/TimeFormatterMixin');
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');



var Timer = React.createClass({
  mixins: [ TimeFormatterMixin, ScreenTypeMixin ],
  componentDidMount: function() {

  },
  render: function () {
    var timer = this.secondsToTime(this.props.timer);

    var styles= {
      timer: {
        textAlign: 'center',
        fontWeight: 600,
        fontFamily: 'Lato, sans-serif',
        fontSize: this.state.screenType == 'DESKTOP' ? '2em' : '1.5em',
        color: '#3479dd',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }
    };

    return (
       <div style={styles.timer}>          
         {timer}
       </div>
    );
  }
});

module.exports = Timer;


