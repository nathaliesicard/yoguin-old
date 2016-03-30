/**
 * Created by nathaliesicard on 3/29/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var PlayButton = require('../components/AudioPlayerButtons').PlayButton;
var PauseButton = require('../components/AudioPlayerButtons').PauseButton;
var StopButton = require('../components/AudioPlayerButtons').StopButton;
var Modal = require('react-modal');
var ModalStyles = require('../styles/ModalStyles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var TimeLabel = require('../components/TimeLabel');


var AudioPlayer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function (){
    return {
      status: 'NOT_STARTED', // 'NOT_STARTED', 'IS_PLAYING', 'IS_PAUSED', 'ENDED'
      modalIsOpen: false,
      timeupdated: 0,
      duration: 0
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
    var duration = this.meditation.duration;
    console.log('duration ', duration);
    var self = this;
    this.meditation.addEventListener('ended', function(){
      self.setState({
        status: 'ENDED'
      });
    });
    this.meditation.addEventListener('timeupdate', function(){
      self.setState({
        timeupdated: self.meditation.currentTime
      });
    });
    this.meditation.addEventListener('durationchange', function(){
      self.setState({
        duration: self.meditation.duration
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
    this.meditation.pause();
  },
  onStopBtnClick: function() {
      console.log('onStopBtnClick function ran');
      this.setState({
        status: 'IS_PAUSED'
      });
      this.meditation.pause();
      this.openModal();
    },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    var button;
    var text;

    var stopButton = (<div>
      <StopButton onStopBtnClick={this.onStopBtnClick}/>
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={ModalStyles} >
        <h3>Terminar la sesión</h3>
        <div>¿Estás seguro de que quieres terminar la meditación ahora?</div>
        <button onClick={this.closeModal}>Cancelar</button>
        <Link to='/'>
          <button>Terminar</button>
        </Link>
      </Modal>
      </div>);

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
        text = <p>Thanks for playing</p>;
        stopButton = '';
      }
      else {
        throw new Error('weird status');
      }

    return(
      <div className="row">
        {text}
        <div className="col-xs-6">
          {button}
        </div>
        <div className="col-xs-6">
        {stopButton}
        </div>
        <TimeLabel timer={this.state.timeupdated} duration={this.state.duration}/>
      </div>
    );
  }
});

module.exports = AudioPlayer;
