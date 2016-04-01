/**
 * Created by nathaliesicard on 3/17/16.
 */
var React = require('react');


var styles = {
  transparentBg: {
    background: 'transparent'
  }
}

function MainContainer(props){
  return (
    <div className="col-sm-12 text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  )
}

module.exports = MainContainer;