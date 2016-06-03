/**
 * Created by nathaliesicard on 6/2/16.
 */

var React = require('react');
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');
var Radium = require('radium');


var SocialIcons = React.createClass({
  mixins: [ScreenTypeMixin],
  render: function () {

    var styles = {
      row: {
        marginTop: this.state.screenType =='DESKTOP' ? '40px' : '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: this.state.screenType =='DESKTOP' ? 'center' : 'space-around',
        flexDirection: 'row',
        width: '100%',
        flexBasis: this.state.screenType =='DESKTOP' ? '0' : '',
        flexGrow: this.state.screenType =='DESKTOP' ? '1' : ''
      },
      social: {
        color: '#fff',
        ':hover': {
          opacity: '0.6'
        }
      }
    };

    return (
          <div style={styles.row}>
            <a href="https://www.facebook.com/yoguinapp/" target="_blank">
              <span className="fa-stack fa-lg" key="facebook" style={styles.social}>
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-facebook-f fa-stack-1x"></i>
              </span>
            </a>
            <a href="https://twitter.com/yoguinapp" target="_blank">
              <span className="fa-stack fa-lg" key="twitter" style={styles.social}>
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-twitter fa-stack-1x"></i>
              </span>
            </a>
            <a href="https://www.instagram.com/yoguinapp/" target="_blank">
              <span className="fa-stack fa-lg" key="instagram" style={styles.social}>
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-instagram fa-stack-1x"></i>
              </span>
            </a>
            <a href="https://es.pinterest.com/yoguinapp/" target="_blank">
              <span className="fa-stack fa-lg" key="pinterest" style={styles.social}>
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-pinterest fa-stack-1x"></i>
              </span>
            </a>
            <a href="http://yoguin.tumblr.com/" target="_blank">
              <span className="fa-stack fa-lg" key="tumblr" style={styles.social}>
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-tumblr fa-stack-1x"></i>
              </span>
            </a>
            <a href="mailto:hola@yoguin.com" target="_blank">
              <span className="fa-stack fa-lg" key="mail" style={styles.social}>
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-envelope-o fa-stack-1x"></i>
              </span>
            </a>
          </div>

    )
  }
});

module.exports = Radium(SocialIcons);