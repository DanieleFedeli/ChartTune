import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SpotifyLogo from '../spotify.png';
import iTunesLogo from '../itunes.png';

const styles = theme => ({

  position: {
    flex: 0,
    'margin-right': 5
  },
  imgcircle: {
    'border-radius': '50%',
    width: 34,
    height: 34
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  spotifyLink: {
    'text-decoration': 'none',
    color: '#FFFFFF',
    'background-color': '#1ED660',
    'border-radius': '10px',
    margin: '0 auto',
    padding: '10px'
  },
  itunesLink: {
    'text-decoration': 'none',
    color: '#000000',
    'background-color': '#FFFFFF',
    'border-radius': '10px',
    margin: '0 auto',
    padding: '10px'
  },
  linkIcon: {
    'vertical-align': 'middle'
  }
});

class ListItemChart extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, position, image, song, album, itunesurl, spotifyurl, genres} = this.props;
    
    const renderGenres = (
      /* Saltiamo l'ultimo elemento dell'array poichè 
      è sempre presente l'elemento 'music'*/
      genres.filter(genre => 
        genres.indexOf(genre) < genres.length - 1
      )
    
    );

    return (
      <div className={classes.root}>
        <ListItem button onClick={this.handleClick}>
          <ListItemText secondary={position} className={classes.position} />
          <img src={image} className={classes.imgcircle} alt='Album'/>
          <ListItemText primary={song} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary={<div><strong>Album:</strong> {album}</div>} />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary={<div><strong>Genre:</strong> {renderGenres.toString()}</div>} />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary={<a href={itunesurl} className={classes.itunesLink}><span>Buy on iTunes</span> <img className={classes.linkIcon} src={iTunesLogo} alt="iTunes" width="20px" /></a>} />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary={<a href={spotifyurl} className={classes.spotifyLink}><span>Listen on Spotify</span> <img className={classes.linkIcon} src={SpotifyLogo} alt="Spotify" width="20px" /></a>} />
            </ListItem>    
          </List>
        </Collapse>
      </div>
    );
  }
}

ListItemChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemChart);

