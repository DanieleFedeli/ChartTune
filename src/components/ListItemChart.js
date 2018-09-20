import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({

  position: {
    flex: 0,
    'margin-right': 5
  },
  imgcircle: {
    'border-radius': '50%'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class ListItemChart extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, position, image, song } = this.props;

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
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Starred" />
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

