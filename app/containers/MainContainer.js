/**
 * Created by nathaliesicard on 3/17/16.
 */
var React = require('react');


var styles = {
  transparentBg: {
    background: 'transparent',
    zIndex: -4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  }
}

function MainContainer(props){
  return (
    <div className="col-xs-12 text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  )
}

module.exports = MainContainer;