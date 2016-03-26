/**
 * Created by nathaliesicard on 3/25/16.
 */
var React = require('react');
var MeditationPlay = require('../components/MeditationPlay');

var MeditationPlayContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <MeditationPlay />
    );
  }
});

module.exports = MeditationPlayContainer;