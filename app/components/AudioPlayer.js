/**
 * Created by nathaliesicard on 3/29/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var PlayButton = require('../components/AudioPlayerButtons').PlayButton;
var PauseButton = require('../components/AudioPlayerButtons').PauseButton;


var AudioPlayer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function (){
    return {
      isPlaying: false,
      isPause: false,
      isLoading: false,
      volume: 0.5
    }
  },

  componentWillMount: function() {
    if (this.props.meditation) {
      this.setState({
        name: this.props.meditation.name,
        url: this.props.meditation.url
      });
    }
    else {
      throw "No data :'(";
    }
  },
  componentDidMount: function () {
    this.meditation = new Audio(this.state.url);

  },
  componentWillUnmount: function () {
    this.meditation.pause();
    delete this.meditation;

  },

  onPlayBtnClick: function(){
    console.log('onPlayBtnClick function ran');
    if (this.state.isPlaying && !this.state.isPause) {
      return;
    }
    this.meditation.play();
    this.setState({
      isPlaying: true
    });
  },

  onPauseBtnClick: function() {
    console.log('onPauseBtnClick function ran');
    var isPause = !this.state.isPause;
    this.setState({ isPause: isPause });
    isPause ? this.pause() : this.play();
  },

  render: function() {
    console.log(this.state.name);
    return(
      <div>
        <PlayButton onPlayBtnClick={this.onPlayBtnClick} />
        <button>
        Pause
      </button>
        <p>
          {this.state.name}
        </p>
      </div>
    );
  }
});

module.exports = AudioPlayer;
