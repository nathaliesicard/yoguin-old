/**
 * Created by nathaliesicard on 3/17/16.
 */
var React = require('react');
var MeditationList = require('../components/MeditationList');

var MeditationListContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
        <MeditationList />
      );
    }
});

module.exports = MeditationListContainer;