/**
 * Created by nathaliesicard on 3/29/16.
 */
var React = require('react');
var PropTypes = React.PropTypes;
var PlayButton = require('./AudioPlayerButtons').PlayButton;
var PauseButton = require('../components/AudioPlayerButtons').PauseButton;
var StopButton = require('../components/AudioPlayerButtons').StopButton;
var ModalCloseBtn = require('../components/AudioPlayerButtons').ModalCloseBtn;
var ModalCancelBtn = require('../components/AudioPlayerButtons').ModalCancelBtn;
var DownloadingStatus = require('../components/AudioPlayerButtons').DownloadingStatus;
var EndedButton = require('../components/AudioPlayerButtons').EndedButton;
var Modal = require('react-modal');
var ModalStyles = require('../styles/ModalStyles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ProgressCircleContainer = require('../containers/ProgressCircleContainer');
var Timer = require('../components/Timer');
var VolumeBar = require('../components/VolumeBar');
var ScreenTypeMixin = require('../mixins/ScreenTypeMixin');
var getFilePath = require('../getFilePath');

var AudioPlayer = React.createClass({
  mixins: [ ScreenTypeMixin ],
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function (){
    return {
      status: 'DOWNLOADING', // 'DOWNLOADING', 'ERROR', 'NOT_STARTED', 'IS_PLAYING', 'IS_PAUSED', 'ENDED'
      modalIsOpen: false,
      timeupdated: 0,
      duration: 0,
      volume: 0.5
    }
  },

  componentWillMount: function() {
    var self = this;

    getFilePath(this.props.meditation.url, function(err, path) {
      if (err) {
        console.error('Could not get meditation path ', err);
        self.setState({ status: 'ERROR' });
        return;
      }
      self.setState({ status: 'NOT_STARTED' });
      
      self.path = path;
      //console.log('Got a path of ', path);
      self.meditation.src = path;
    });



  },
  componentDidMount: function () {
    this.meditation = new Audio();
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
    //console.log('adjustVolumeTo formula triggered with the volume: ',percent);
    this.setState({ volume: percent });
    if (this.meditation) {
      this.meditation.volume = percent;
    }
  },

  onStopBtnClick: function() {
      //console.log('onStopBtnClick function ran');
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
        <ModalCancelBtn closeModal={this.closeModal} />
        <Link to='/'>
          <ModalCloseBtn />
        </Link>
      </Modal>
      </div>);

      if (this.state.status == 'DOWNLOADING') {
        button = <DownloadingStatus />;
        text = <p>Cargando</p>;
      }
      else if (this.state.status == 'ERROR') {
        button = <h1>Error..</h1>;
      }
      else if (this.state.status == 'NOT_STARTED') {
      button = <PlayButton onPlayBtnClick={this.onPlayBtnClick} />
      }
      else if (this.state.status == 'IS_PLAYING') {
        button = <PauseButton onPauseBtnClick={this.onPauseBtnClick} />
      }
      else if (this.state.status == 'IS_PAUSED') {
        button = <PlayButton onPlayBtnClick={this.onPlayBtnClick} />
      }
      else if (this.state.status == 'ENDED') {
        text = <p>Gracias por utilizar Yoguin</p>;
        stopButton = '';
        button = <EndedButton />
      }
      else {
        throw new Error('weird status ' + this.state.status);
      }

    var styles= {
      center: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%'
      },
      header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        top: '10%',
        left: 0,
        fontWeight: '700'
      },
      h2: {
        color: '#3479dd',
        fontFamily: 'BrandonGrotesque-Bold, sans-serif',
        textShadow: '1px 1px 2px rgba(255, 255, 255, 0.20)',
        textTransform: 'uppercase',
        fontSize: this.state.screenType == 'DESKTOP' ? '30px' : '25px',
      },
      h3: {
        color: '#333',
        textShadow: '1px 1px 2px rgba(255, 255, 255, 0.20)',
        fontSize: this.state.screenType == 'DESKTOP' ? '24px' : '18px',
        marginTop: this.state.screenType == 'DESKTOP' ? '20px' : '5px'
      },
      button: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        top: (window.innerHeight/2) - 60,
        left: 0,
        zIndex: 0
      },
      progress: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        top: (window.innerHeight/2) - 90,
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
      },
      text: {
        marginTop: this.state.screenType == 'DESKTOP' ? '30px' : '0px',
        fontSize: '1.3em'
      }
    };
    return(

      <div style={styles.box}>
        <div style={styles.right}>
          {stopButton}
        </div>
        <div style={styles.header}>
          <h2 style={styles.h2}>{this.props.meditation.name}</h2>
          <h3 style={styles.h3}>{this.props.meditation.quip}</h3>
        </div>
        <div style={styles.button}>
            {button}
        </div>
        <div style={styles.progress}>
          <ProgressCircleContainer
            timer={this.state.timeupdated}
            duration={this.state.duration}
            status={this.state.status} />
          <div style={styles.text}>{text}</div>
        </div>

        <div style={styles.timer}>
          <Timer timer={this.state.timeupdated}  status={this.state.status} />
        </div>
      </div>
    );
  }
});

module.exports = AudioPlayer;

/*<div style={styles.volume}>
 <VolumeBar volume={this.state.volume} adjustVolumeTo={this.adjustVolumeTo} />
 </div>*/