/**
 * Created by nathaliesicard on 3/25/16.
 */
var React = require('react');
var MeditationItem = require('../components/MeditationItem');

var MeditationItemContainer = React.createClass({
  render: function() {
    return (
      <MeditationItem />
    );
  }
});

module.exports = MeditationItemContainer;