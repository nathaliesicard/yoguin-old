/**
 * Created by nathaliesicard on 3/17/16.
 */
var React = require('react');
var MeditationList = require('../components/MeditationList');
var MeditationItem = require('../components/MeditationItem');
var meditations = require('../meditations');




var MeditationListContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function (){
    return {
      audio: {}
    }
  },
  handleClickForPlay: function(which){
    console.log('handleClickForPlay ' + which);
    this.context.router.push({
      pathname: '/play/',
      state: {
        meditation : which
      }
    })
  },
  render: function() {
    var self = this;
    var MeditationItems = Object.keys(meditations).map(function(key){
      var audio = meditations[key];
      return (
        <MeditationItem
          name={audio.name}
          url={audio.url}
          quip={audio.quip}
          img={audio.img}
          key={audio.name}
          duration={audio.duration}
          //handleClickForPlay={function() { self.handleClickForPlay(i) } }
          handleClickForPlay={ self.handleClickForPlay.bind(self, key) }
        />
      );
    });

    return(
      <div>
        <MeditationList
          header='Elige una meditación'
        >
          {MeditationItems}
        </MeditationList>
      </div>
      );
    }
});

module.exports = MeditationListContainer;