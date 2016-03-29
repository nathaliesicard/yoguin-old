/**
 * Created by nathaliesicard on 3/25/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var AudioPlayer = require('./AudioPlayer');
var MeditationList = require('../components/MeditationList');

var songs = [
  {
    name: 'Meditación 1',
    url: "/app/assets/Meditacion_1.mp3"
  }
]

function MeditationPlay(props) {
  console.log('props are: ',props);
  return (
    <MeditationList header="Playing Meditation">
      <AudioPlayer songs={songs} />
    </MeditationList>
  )
}

MeditationPlay.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  quip: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired

};

module.exports = MeditationPlay;