/**
 * Created by nathaliesicard on 3/25/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var AudioPlayer = require('./AudioPlayer');
var MeditationList = require('../components/MeditationList');


function MeditationPlay(props) {
  var meditation = props;
  return (
    <MeditationList header={props.name}>
      <AudioPlayer meditation={props} />
    </MeditationList>
  )
}

MeditationPlay.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  quip: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired
};

module.exports = MeditationPlay;