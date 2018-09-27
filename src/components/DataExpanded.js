import React, { Component } from 'react';
import Share from './Share';
import ListItemChart from './ListItemChart';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    color: '#000000',
    'font-size': '1em',
    'text-decoration': 'none',
    'border': '1px solid #e7e9ed',
    'border-radius': '15px 50px 30px',
    'padding': '5px',
  },
};

class DataExpanded extends Component {

  render () {
    const { classes } = this.props;
    const { data } = this.props;
    
    const buildGenres = (song) => {
      var genres = []
      song.genres.map(item => genres.push(item.name))
      return genres
    }

    return(      
      <div>
        <Share></Share>
        <Link to={'/linechart?country=' + this.props.country + ''} country={this.props.country} className={classes.link}>
          <span>{"See with ChartJS"}<img className={classes.linkImage} src="http://www.chartjs.org/img/chartjs-logo.svg" alt="ChartJS Logo" width="50px" /></span>
        </Link>
        {data.map((item, i) =>
          <ListItemChart 
            position={i + 1}
            album={ item.collectionName }
            image={ item.artworkUrl100 } 
            song={ item.artistName + " — " + item.name } 
            key={ item.id } 
            itunesurl={ item.url }
            spotifyurl={ item.url }
            genres={ buildGenres(item) }
          />
        )}
      </div>
    )
  }
}

DataExpanded.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataExpanded);