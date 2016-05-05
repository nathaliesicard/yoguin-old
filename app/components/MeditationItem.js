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
          flexDirection: 'column'
        },
        bgRight: {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        },
        duration: {
          fontSize: this.state.screenType == 'DESKTOP' ? '1.1em' : '15px',
          fontFamily: 'Lato-Regular, sans-serif'
        },
        title: {
          display: 'flex',
          alignSelf: 'center',
          textTransform: 'uppercase',
          fontSize: this.state.screenType == 'DESKTOP' ? '2em' : '1.5em',
          fontFamily: 'BrandonGrotesque-Bold'
        },
        quip: {
          fontSize: this.state.screenType == 'DESKTOP' ? '1.2em' : '16px',
          fontFamily: 'BrandonGrotesque-Medium'
        },
        button: {
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          paddingBottom: '2px',
          width: this.state.screenType == 'DESKTOP' ? '4.5em' : '60px',
          height: this.state.screenType == 'DESKTOP' ? '4.5em' : '60px',
          lineHeight: '5.5em',
          border: '0px',
          borderRadius: '50%',
          textAlign: 'center',
          textDecoration: 'none',
          background: 'linear-gradient(50deg,#ff5a5f,#ff6a6f)',
          boxShadow: '0 0 3px gray',
          fontSize: this.state.screenType == 'DESKTOP' ? '1em' : '1.5em',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '5px',
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
          padding: '10px',
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
            <button key="button" style={styles.button}>
              <i className="fa fa-play"></i>
            </button>
            <span style={styles.duration}>{this.props.duration} min</span>
          </div>
        </div>
      </div>
    );
  }

});




module.exports = Radium(MeditationItem);