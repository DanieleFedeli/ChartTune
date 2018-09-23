import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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
  link: {
    color: '#000000',
    'text-decoration': 'none'
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
    const { classes, position, image, song, album, url, genres} = this.props;
    
    const renderGenres = (
      /* Saltiamo l'ultimo elemento dell'array poichè 
      è sempre presente l'elemento 'music'*/
      genres.filter(genre => 
        genres.indexOf(genre) < genres.length - 1
      ).map(genre => 
        <ListItem button className={classes.nested}>
          <ListItemText secondary={ genre } />
        </ListItem>
      )
    
    );

    console.log(renderGenres);
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
              <ListItemText primary={ album } />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Generi" />
            </ListItem>
            {renderGenres}
            <ListItem button className={classes.nested}>
              <ListItemText primary={<a href={url} className={classes.link}>Ascolta qui</a>} />
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

