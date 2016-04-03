/**
 * Created by nathaliesicard on 4/3/16.
 */


function getScreenType() {
  if (window.innerWidth >= 768) {
    return 'DESKTOP';
  }
  else {
    return 'PHONE';
  }
}

var ScreenTypeMixin = {
  getInitialState: function () {
    return {screenType: getScreenType()};
  },
  handleResize: function (e) {
    this.setState({screenType: getScreenType()});
  },

  componentDidMount: function () {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function () {
    window.removeEventListener('resize', this.handleResize);
  }
};


module.exports = ScreenTypeMixin;
