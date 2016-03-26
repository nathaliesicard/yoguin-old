/**
 * Created by nathaliesicard on 3/25/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var AudioPlayer = require('./AudioPlayer');
var songs = [
  {
    name: 'Meditación 1',
    url: "/app/assets/Meditacion_1.mp3"
  }
]

function MeditationPlay() {
  return (
    <div className = "jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>Playing Meditation...</h1>
      <AudioPlayer songs={songs} />
    </div>
  )
}


module.exports = MeditationPlay;