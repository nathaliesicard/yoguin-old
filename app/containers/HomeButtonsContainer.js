/**
 * Created by nathaliesicard on 3/24/16.
 */
var React = require('react');
var styles = {
  homeButtons: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '70vh'
  }
};


function HomeButtonsContainer(props){
  return (
    <div className="col-xs-10 col-xs-offset-1" style={styles.homeButtons}>
      {props.children}
    </div>
  )
}

module.exports = HomeButtonsContainer;