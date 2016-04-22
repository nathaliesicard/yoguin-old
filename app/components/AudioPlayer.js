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
var ProgressCircleContainer = require('../containers/ProgressCircleContainer');
var Timer = require('../components/Timer');
var VolumeBar = require('../components/VolumeBar');


var AudioPlayer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function (){
    return {
      status: 'NOT_STARTED', // 'NOT_STARTED', 'IS_PLAYING', 'IS_PAUSED', 'ENDED'
      modalIsOpen: false,
      timeupdated: 0,
      duration: 0,
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
    var duration = this.meditation.duration;
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
    this.meditation.removeEventListener('ended', function(){
      self.setState({
        status: 'ENDED'
      });
    });
    this.meditation.removeEventListener('timeupdate', function(){
      self.setState({
        timeupdated: self.meditation.currentTime
      });
    });
    this.meditation.removeEventListener('durationchange', function(){
      self.setState({
        duration: self.meditation.duration
      });
    });


  },

  onPlayBtnClick: function(){
    this.setState({
      status: 'IS_PLAYING'
    });
    this.meditation.play();
  },

  onPauseBtnClick: function() {
    this.setState({
      status: 'IS_PAUSED'
    });
    this.meditation.pause();
  },

  adjustVolumeTo: function(percent) {
    console.log('adjustVolumeTo formula triggered with the volume: ',percent);
    this.setState({ volume: percent });
    if (this.meditation) {
      this.meditation.volume = percent;
    }
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

    var styles= {
      center: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%'
      },
      button: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        top: (window.innerHeight/2) - 50,
        left: 0,
        zIndex: 0
      },
      progress: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        top: (window.innerHeight/2) - 100,
        left: 0,
        zIndex: -1
      },
      timer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        top: '70%',
        left: 0
      },
      volume: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        top: '80%',
        left: 0
      },
      right: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        margin: '25px',
        width: '100%'
      },
      box: {
        display: 'flex',
        height: '100%',
        width: '100%',
        flexWrap: 'wrap'
      }
    };
    return(

      <div style={styles.box}>
        <div style={styles.right}>
          {stopButton}
        </div>
        {text}
        <div style={styles.button}>
            {button}
        </div>
        <div style={styles.progress}>
          <ProgressCircleContainer
            timer={this.state.timeupdated}
            duration={this.state.duration}
            status={this.state.status} />
          </div>
          <div style={styles.timer}>
            <Timer timer={this.state.timeupdated}  status={this.state.status} />
        </div>
        <div style={styles.volume}>
         <VolumeBar volume={this.state.volume} adjustVolumeTo={this.adjustVolumeTo} />
        </div>
      </div>
    );
  }
});

module.exports = AudioPlayer;
