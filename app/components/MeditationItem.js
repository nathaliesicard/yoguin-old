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


var styles = {
  base: {
    textDecoration: 'none'
  },
  bgLeft: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '14px'
  },
  bgRight: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'sans-serif',
    fontSize: '12px'
    },
  title: {
    display: 'flex',
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    fontSize: '20px'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingBottom: '2px',
    width: '48px',
    height: '48px',
    lineHeight: '50px',
    border: '0px',
    borderRadius: '50%',
    textAlign: 'center',
    textDecoration: 'none',
    background: 'linear-gradient(50deg,#ff5a5f,#ff6a6f)',
    boxShadow: '0 0 3px gray',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    transition: 'box-shadow .2s ease-in-out',
    ':hover': {
      background: color('#ff7e82').hexString()
    }
  }
};

function MeditationItem(props){

  var backgroundStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '70vmin',
    height: '15vh',
    border: '0px',
    textDecoration: 'none',
    //background: 'linear-gradient(60deg,#3479dd,#344fdd)',
    backgroundImage: 'url(' + props.img + ')',
    backgroundSize: 'cover',
    boxShadow: '0 0 3px gray',
    color: '#fff',
    transition: 'box-shadow .2s ease-in-out',
    padding: '10px',
    ':hover': {
      //backgroundColor: color('#0074d9').lighten(0.2).hexString()
      opacity: 0.8
    }
  };


  return (
      <div style={styles.base} onClick={props.handleClickForPlay}>
        <div className="row" key="bg" style={backgroundStyle}>
          <div className="col-xs-9" key="bgLeft" style={styles.bgLeft}>
            <h3 key="title" style={styles.title}>{props.name}</h3>
            <p>{props.quip}</p>
          </div>
          <div className="col-xs-3" key="bgRight" style={styles.bgRight}>
            <button key="button" style={styles.button}>
              <i className="fa fa-play-circle"></i>
            </button>
            <span>15 min</span>
          </div>
        </div>
      </div>
  );
}


MeditationItem.propTypes = {
  // meditationId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  quip: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  handleClickForPlay: PropTypes.func.isRequired
};



module.exports = Radium(MeditationItem);