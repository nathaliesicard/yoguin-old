/**
 * Created by nathaliesicard on 3/17/16.
 */
var React = require('react');
var MeditationList = require('../components/MeditationList');
var MeditationItem = require('../components/MeditationItem');




var MeditationListContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    var MeditationItems = this.props.route.data.map(function(audio){
      return (
        <MeditationItem name={audio.name} url={audio.url} quip={audio.quip} key={audio.name} />
      );
    });
    console.log('meditation items are: ',MeditationItems);


    return(
      <div>
        {MeditationItems}
      </div>
      );
    }
});

module.exports = MeditationListContainer;