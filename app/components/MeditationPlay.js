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

function MeditationPlay() {
  return (
    <MeditationList header="Playing Meditation">
      <AudioPlayer songs={songs} />
    </MeditationList>
  )
}


module.exports = MeditationPlay;