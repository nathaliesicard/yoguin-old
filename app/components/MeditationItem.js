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
  bg: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '70vmin',
    height: '15vh',
    border: '0px',
    textDecoration: 'none',
    background: 'linear-gradient(60deg,#3479dd,#344fdd)',
    boxShadow: '0 0 3px gray',
    color: '#fff',
    transition: 'box-shadow .2s ease-in-out',
    padding: '10px',
    ':hover': {
      background: color('#0074d9').lighten(0.2).hexString()
    }
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
    flexShrink: 2,
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
  return (
      <Link to='play' style={styles.base}>
        <div className="row" key="bg" style={styles.bg}>
          <div className="col-xs-9" key="bgLeft" style={styles.bgLeft}>
            <h3 key="title" style={styles.title}>Gratitude</h3>
            <p>Learn to appreciate what you have.</p>
          </div>
          <div className="col-xs-3" key="bgRight" style={styles.bgRight}>
            <button key="button" id={props.meditationId} style={styles.button}>
              <i className="fa fa-play-circle"></i>
            </button>
            <span>15 min</span>
          </div>
        </div>
      </Link>
  );
}


MeditationItem.propTypes = {
  meditationId: PropTypes.string.isRequired,
}



module.exports = Radium(MeditationItem);