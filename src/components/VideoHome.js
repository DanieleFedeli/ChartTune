import React, { Component } from 'react';
import ConcertVideo from '../VideoIntro.mp4';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden'
  },
  textTitle: {
    
  },
  video: {
    height: 400,
    opacity: 0.5,
    width: '100%',
    'object-fit': 'cover',
    'pointer-events': 'none',
    cursor: 'default',
    
  },
  content: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
    opacity: 0.7
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
        <div className={classes.content}>
          <Typography variant="display4"
            gutterBottom className={classes.textTitle}
          >
            CHART TUNE
          </Typography>
          <Typography variant="subheading" gutterBottom >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam ut metus scelerisque vehicula eu sed nisi. Suspendisse blandit dui id eleifend ullamcorper. Vivamus elementum lorem a tellus bibendum, sed malesuada ligula tempus. Praesent auctor nisl ligula, eget laoreet justo ultrices ut. Nam tristique iaculis vestibulum. Etiam non ante quis tellus vestibulum porttitor non sit amet dui. Suspendisse nec nisl tristique, condimentum ipsum accumsan, dignissim quam. Vestibulum venenatis massa ut velit pretium scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="subheading" gutterBottom >
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras metus nisl, feugiat sed ultrices in, posuere at risus. Nam facilisis et ipsum viverra auctor. Sed elementum semper mattis. Morbi a neque accumsan, lacinia urna eu, imperdiet augue. Maecenas ante est, tincidunt sollicitudin massa nec, varius laoreet risus. Proin ut rhoncus lacus. Nulla gravida ultrices turpis tincidunt maximus. Fusce eu quam sed eros tincidunt viverra quis eu velit. Vestibulum vestibulum vitae ipsum at tempor. Integer nec suscipit massa.
          </Typography>
          <Typography variant="subheading" gutterBottom >
            Sed eu lacinia libero, at fringilla lorem. Pellentesque non quam eget dolor laoreet pretium. Curabitur at lacus ex. Aenean egestas congue blandit. Donec nulla tellus, finibus sed ipsum vitae, scelerisque iaculis arcu. Aliquam maximus porttitor dui quis molestie. Nam lorem lorem, maximus ullamcorper lacus sit amet, tincidunt imperdiet turpis. Vivamus tincidunt sem malesuada viverra facilisis. Curabitur erat justo, blandit non lobortis ac, hendrerit vel sapien. Proin rutrum libero non porta convallis. Donec id congue elit, ut euismod tortor. Ut ultricies fringilla nibh, vehicula hendrerit mauris ullamcorper eu. Nam tempus justo a efficitur tempor. Quisque ac eleifend nunc, sit amet pretium quam.
          </Typography>
        </div>
      
      </div>
    );
  }
}

export default withStyles(styles)(VideoHome);