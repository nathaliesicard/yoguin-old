/**
 * Created by nathaliesicard on 3/25/16.
 */
var React = require('react');
var MeditationPlay = require('../components/MeditationPlay');
var meditations = require('../meditations');

var MeditationPlayContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    var selectedMeditationInfo = meditations[this.props.location.state.meditation];
    //console.log('The selected meditation info is: ',selectedMeditationInfo);
    return (
      <MeditationPlay
        name={selectedMeditationInfo.name}
        quip={selectedMeditationInfo.quip}
        duration={selectedMeditationInfo.duration}
        img={selectedMeditationInfo.img}
        url={selectedMeditationInfo.url}
        key={selectedMeditationInfo.name}
      />
    );
  }
});

module.exports = MeditationPlayContainer;