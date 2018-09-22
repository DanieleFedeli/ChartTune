import React, { Component } from 'react';
import ConcertVideo from '../VideoIntro.mp4';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
  root: {
    position: 'relative',
    overflow: 'hidden'
  },

  video: {
    height: 300,
    opacity: 0.5,
    width: '100%',
    'object-fit': 'cover',
    'pointer-events': 'none',
    cursor: 'default',
  },
  title: {
    position: 'absolute',
    bottom: 0,
    background: 'white',
    width: '100%',
    fontSize: '5rem',
    opacity: 0.5,
    mixBlendMode: 'exclusion',
  }
});

class VideoHome extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <video autoPlay loop className={classes.video}>
          <source src={ConcertVideo} type='video/mp4'></source>
        </video>
        <h1 className={classes.title} >
          CHART TUNE
        </h1>
        
      </div>
    );
  }
}

export default withStyles(styles)(VideoHome);