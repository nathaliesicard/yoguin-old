/**
 * Created by nathaliesicard on 3/24/16.
 */
var React = require('react');
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');
var Radium = require('radium');


var HomeButtonsContainer = React.createClass({
  mixins: [ScreenTypeMixin],
  render: function () {

    var styles = {
      base: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        height: this.state.screenType =='DESKTOP' ? '70vh' : '65vh',
      },
      column: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: this.state.screenType =='DESKTOP' ? 'row' : 'column',
        width: '100%'
      },
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
      homepageDesc: {
        fontFamily: 'BrandonGrotesque-Medium, sans-serif',
        fontWeight: this.state.screenType =='DESKTOP' ? 400 : 500,
        color: '#fff',
        fontSize: this.state.screenType =='DESKTOP' ? '2em' : '1.5em',
        zIndex: -4,
        flexBasis: this.state.screenType =='DESKTOP' ? '0' : '',
        flexGrow: this.state.screenType =='DESKTOP' ? '1' : '',
        alignItems: 'center',
        marginBottom: this.state.screenType =='DESKTOP' ? '0px' : '10px',
      },
      social: {
        color: '#fff',
        ':hover': {
          opacity: '0.6'
        }
      },
      flexItem: {
        display: 'flex',
        flexBasis: this.state.screenType =='DESKTOP' ? '0' : '',
        flexGrow: this.state.screenType =='DESKTOP' ? '1' : '',
        justifyContent: 'center'
      }
    };

    return (
      <div className="col-xs-12" style={styles.base}>
        <div style={styles.column}>
          <p style={styles.homepageDesc}>App de Meditación Guiada</p>
          <div style={styles.flexItem}>
          {this.props.children}
          </div>
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
        </div>
      </div>
    )
  }
});

module.exports = Radium(HomeButtonsContainer);