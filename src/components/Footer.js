import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';

const styles = {
};

class Footer extends React.Component {

  state = {
    value: window.location.pathname.substring(1)
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    //const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange}>
        <BottomNavigationAction label="Home" value="" href="/" icon={<Icon>home</Icon>} />
        <BottomNavigationAction label="F.A.Q" value="faq" href="/faq" icon={<Icon>help</Icon>} />
        <BottomNavigationAction label="Our Team" value="aboutus" href="/aboutus" icon={<Icon>account_circle</Icon>} />
        <BottomNavigationAction label="Feedback" value="feedback" href="/feedback" icon={<Icon>feedback</Icon>} />
        <BottomNavigationAction label="Charts" value="charts" href="/charts" icon={<Icon>show_chart</Icon>} />
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);