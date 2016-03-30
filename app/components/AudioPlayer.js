/**
 * Created by nathaliesicard on 3/29/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var PlayButton = require('../components/AudioPlayerButtons').PlayButton;
var PauseButton = require('../components/AudioPlayerButtons').PauseButton;
var StopButton = require('../components/AudioPlayerButtons').StopButton;


var AudioPlayer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function (){
    return {
      status: 'NOT_STARTED' // 'NOT_STARTED', 'IS_PLAYING', 'IS_PAUSED', 'ENDED'
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
    var self = this;
    this.meditation.addEventListener('ended', function(){
      console.log('Audio ended');
      self.setState({
        status: 'ENDED'
      });
    });

  },
  componentWillUnmount: function () {
    this.meditation.pause();
  },

  onPlayBtnClick: function(){
    console.log('onPlayBtnClick function ran');
    this.setState({
      status: 'IS_PLAYING'
    });
    this.meditation.play();
  },

  onPauseBtnClick: function() {
    console.log('onPauseBtnClick function ran');
    this.setState({
      status: 'IS_PAUSED'
    });
    this.meditation.stop();
  },
    onStopBtnClick: function() {
      console.log('onStopBtnClick function ran');
      this.setState({
        status: 'IS_PAUSED'
      });
      this.meditation.pause();
    },

  render: function() {
    var button;

    if (this.state.status == 'NOT_STARTED') {
        button = <PlayButton onPlayBtnClick={this.onPlayBtnClick} />
      }
      else if (this.state.status == 'IS_PLAYING') {
        button = <PauseButton onPauseBtnClick={this.onPauseBtnClick} />
      }
      else if (this.state.status == 'IS_PAUSED') {
        button = <PlayButton onPlayBtnClick={this.onPlayBtnClick} />
      }
      else if (this.state.status == 'ENDED') {
        button = <p>Thanks for playing</p>
      }
      else {
        throw new Error('weird status');
      }
    return(
      <div>
        {button}
        <StopButton onStopBtnClick={this.onStopBtnClick} />
        <p>
          {this.state.name}
        </p>
      </div>
    );
  }
});

module.exports = AudioPlayer;
