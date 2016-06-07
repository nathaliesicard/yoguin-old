/**
 * Created by nathaliesicard on 3/24/16.
 */
var React = require('react');
var ScreenTypeMixin = require('./../mixins/ScreenTypeMixin');
var Radium = require('radium');
var SocialIcons = require('../components/SocialIcons');



var HomeButtonsContainer = React.createClass({
  mixins: [ScreenTypeMixin],
  render: function () {

    function getScreenHeight(state) {
      if (state == 'DESKTOP') {
        return '70vh';
      }  else if (state == 'PHONE') {
        return '65vh';
      } else {
        return '';
      }
    }

    function getHomepageDescMargin(state) {
      if (state == 'DESKTOP') {
        return '40px';
      }  else if (state == 'PHONE') {
        return '0px';
      } else {
        return '10px';
      }
    }

    var styles = {
      base: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        height: getScreenHeight(this.state.screenType)
      },
      column: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: this.state.screenType =='DESKTOP' ? 'row' : 'column',
        width: '100%',
        flexWrap: this.state.screenType =='DESKTOP' ? 'wrap' : ''
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
        marginTop: getHomepageDescMargin(this.state.screenType),
        marginBottom: this.state.screenType =='DESKTOP' ? '0px' : '10px'
      },
      flexItem: {
        display: 'flex',
        flexBasis: this.state.screenType =='DESKTOP' ? '0' : '',
        flexGrow: this.state.screenType =='DESKTOP' ? '1' : '',
        justifyContent: 'center'
      }
    };

    var socialIcons;
    if (this.state.screenType =='PHONE LAND') {
      socialIcons = '';
    } else {
      socialIcons = <SocialIcons />;
    }

    return (
      <div className="col-xs-12" style={styles.base}>
        <p style={styles.homepageDesc}>App de Meditación Guiada</p>
        <div style={styles.column}>
          <p style={styles.flexItem}></p>
          <div style={styles.flexItem}>
          {this.props.children}
          </div>
          { socialIcons }
        </div>
      </div>
    )
  }
});

module.exports = Radium(HomeButtonsContainer);