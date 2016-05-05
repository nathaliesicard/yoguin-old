/**
 * Created by nathaliesicard on 4/24/16.
 */


var MeditateButton = React.createClass({
  mixins: [ScreenTypeMixin],
  render: function () {

    var baseStyle = {
      display: 'block',
      width:  this.state.screenType == 'DESKTOP' ? '4em' : '6em',
      height: '4em',
      lineHeight: '50px',
      border: '0px',
      borderRadius: '50%',
      textAlign: 'center',
      textDecoration: 'none',
      background: 'linear-gradient(60deg,#3479dd,#344fdd)',
      boxShadow: '0 0 3px gray',
      fontSize: '1.2em',
      fontWeight: 'bold',
      color: '#fff',
      transition: 'box-shadow .2s ease-in-out',
      ':hover': {
        background: color('#0074d9').lighten(0.2).hexString()
      }
    };

    if (this.state.screenType !==' DESKTOP') {
      baseStyle.width = '6em';
      baseStyle.height = '6em';

      Object.assign(baseStyle, {
        width: '6em',
        height: '6em'
      });
