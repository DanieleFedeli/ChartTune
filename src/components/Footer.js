import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';

const styles = {
  root: {
    marginTop: 10,
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
};

class Footer extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="F.A.Q" value="faq" icon={<Icon>help</Icon>} />
        <BottomNavigationAction label="Our Team" value="team" icon={<Icon>account_circle</Icon>} />
        <BottomNavigationAction label="Feedback" value="feedback" icon={<Icon>feedback</Icon>} />
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);