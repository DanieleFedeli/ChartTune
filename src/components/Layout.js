import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import Footer from '../components/Footer';
import Logo from '../logo.png'
import { Typography } from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    position: 'relative',
    display: 'flex',
  },
  titleHide: {
    display: 'none'
  },
  logo: {
    height: 25,
    width: 25,
    margin: 5
  },
  
  drawerPaper: {
    'z-index': 0,
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  content: {
    flexGrow: 1,
    overflowX: 'auto',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginBottom: 70
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
});

class PersistentDrawer extends React.Component {
  state = {
    open: false,
    anchor: 'left',
  };


  /* Functions for making sidebar opening or closing */
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  

  render() {
    const { classes } = this.props;
    const { anchor, open } = this.state;

    /* Sidebar rendering */
    const drawer = (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
        }}
        open={this.state.open}
        onMouseEnter={this.handleDrawerOpen}
        onMouseLeave={this.handleDrawerClose}
      >
        <div className={classes.toolbar}>
          <IconButton>
            <img src={Logo} alt='Chart tune logo' className={classes.logo}></img>
            <Typography variant='headline' 
              className={classNames(classes.title, {
                [classes.titleHide]: open === false,
            })}
            >
              CharTune
            </Typography>
          </IconButton>
        </div>
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </Drawer>
    );

    return (
      <div className={classes.root}>
        {/* Calling sidebar rendering*/}
        {drawer}
        {/* Rendering main content page */}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open
            })}
          >
            {this.props.yield}
          </main>
        <Footer/>
      </div>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);