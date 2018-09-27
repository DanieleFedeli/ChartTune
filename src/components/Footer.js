import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  footer: {
    position: 'absolute',
    width: '100%',
    'z-index': 1,
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      bottom: 0
    },
    
  },
  iconFooter: {
    minWidth: 0,
    display: "block"
  },
  iconFooterSelected: {
    color: '#f44336 !important'
  }
});

class Footer extends React.Component {

  state = {
    value: window.location.pathname.substring(1)
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.footer}>
        <BottomNavigationAction label="Home" value="" href="/" icon={<Icon>home</Icon>} classes={{
            root: classes.iconFooter,
            selected: classes.iconFooterSelected
          }} />
        <BottomNavigationAction label="F.A.Q" value="faq" href="/faq" icon={<Icon>help</Icon>}  classes={{
            root: classes.iconFooter,
            selected: classes.iconFooterSelected
          }} />/>
        <BottomNavigationAction label="Team" value="aboutus" href="/aboutus" icon={<Icon>account_circle</Icon>}  classes={{
            root: classes.iconFooter,
            selected: classes.iconFooterSelected
          }} />/>
        <BottomNavigationAction label="Feedback" value="feedback" href="/feedback" icon={<Icon>feedback</Icon>}  classes={{
            root: classes.iconFooter,
            selected: classes.iconFooterSelected
          }} />/>
        <BottomNavigationAction label="Charts" value="charts" href="/charts" icon={<Icon>show_chart</Icon>}  classes={{
            root: classes.iconFooter,
            selected: classes.iconFooterSelected
          }} />/>
      </BottomNavigation>
    );
  }
}


export default withStyles(styles)(Footer);