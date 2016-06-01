/**
 * Created by nathaliesicard on 3/25/16.
 */
var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var Link = ReactRouter.Link;
var MeditationItemContainer = require('../containers/MeditationItemContainer');
var color = require('color');
var Radium = require('radium');
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');



var MeditationItem = React.createClass({
  mixins: [ScreenTypeMixin],
  propTypes: {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    quip: React.PropTypes.string.isRequired,
    img: React.PropTypes.string.isRequired,
    duration: React.PropTypes.number.isRequired,
    handleClickForPlay: React.PropTypes.func.isRequired
  },
  render: function () {

      var styles = {
        base: {
          textDecoration: 'none'
        },
        bgLeft: {
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingRight: this.state.screenType == 'DESKTOP' ? '15px' : '5px',
          paddingLeft: this.state.screenType == 'DESKTOP' ? '15px' : '5px'
        },
        bgRight: {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        },
        duration: {
          fontSize: this.state.screenType == 'DESKTOP' ? '1.1em' : '0.8em',
          fontFamily: 'Lato-Regular, sans-serif'
        },
        title: {
          display: 'flex',
          alignSelf: 'center',
          textTransform: 'uppercase',
          fontSize: this.state.screenType == 'DESKTOP' ? '2em' : '1em',
          marginTop: this.state.screenType == 'DESKTOP' ? '20px' : '5px',
          marginBottom: this.state.screenType == 'DESKTOP' ? '10px' : '5px',
          fontFamily: 'BrandonGrotesque-Bold'
        },
        quip: {
          fontSize: this.state.screenType == 'DESKTOP' ? '1.2em' : '0.9em',
          marginBottom: this.state.screenType == 'DESKTOP' ? '10px' : '0px',
          fontFamily: 'Lato-Regular, sans-serif'
        },
        button: {
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          width: this.state.screenType == 'DESKTOP' ? '4.5em' : '3em',
          height: this.state.screenType == 'DESKTOP' ? '4.5em' : '3em',
          lineHeight: '5.5em',
          border: '0px',
          borderRadius: '50%',
          textAlign: 'center',
          textDecoration: 'none',
          background: 'linear-gradient(50deg,#ff5a5f,#ff6a6f)',
          boxShadow: '0 0 3px gray',
          fontSize: this.state.screenType == 'DESKTOP' ? '1em' : '1em',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: this.state.screenType == 'DESKTOP' ? '5px' : '1px',
          transition: 'box-shadow .2s ease-in-out',
          ':hover': {
            background: color('#ff7e82').hexString()
          }
        },
        backgroundStyle: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '75vw',
          height: '15vh',
          border: '0px',
          textDecoration: 'none',
          //background: 'linear-gradient(60deg,#3479dd,#344fdd)',
          backgroundImage: 'url(' + this.props.img + ')',
          backgroundSize: 'cover',
          boxShadow: '0 0 3px gray',
          color: '#fff',
          transition: 'box-shadow .2s ease-in-out',
          padding: this.state.screenType == 'DESKTOP' ? '10px' : '5px',
          ':hover': {
            //backgroundColor: color('#0074d9').lighten(0.2).hexString()
            opacity: 0.8
          }
        }
      };


    return (
      <div style={styles.base} onClick={this.props.handleClickForPlay}>
        <div className="row" key="bg" style={styles.backgroundStyle}>
          <div className="col-xs-9" key="bgLeft" style={styles.bgLeft}>
            <h3 key="title" style={styles.title}>{this.props.name}</h3>
            <p style={styles.quip}>{this.props.quip}</p>
          </div>
          <div className="col-xs-3" key="bgRight" style={styles.bgRight}>
            <button style={styles.button} ><i className="fa fa-play"></i></button>
            <span style={styles.duration}>{this.props.duration} min</span>
          </div>
        </div>
      </div>
    );
  }

});




module.exports = Radium(MeditationItem);