/**
 * Created by nathaliesicard on 3/24/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var AudioPlayer = require('./AudioPlayer');
var songs = [
  {
    url: "assets/stop.mp3"
  }
]

function MeditationList() {
  return (
    <div className = "jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>Meditation List</h1>
      <h3>Player 1</h3>
      <AudioPlayer songs={songs} />
      <h3>Player 2</h3>
      <AudioPlayer dataUrl="dist/assets/songs.json" />
    </div>
  )
}


module.exports = MeditationList;