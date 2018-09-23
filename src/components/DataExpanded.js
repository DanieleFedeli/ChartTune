import React, { Component } from 'react';
import Share from './Share';
import ListItemChart from './ListItemChart';

class DataExpanded extends Component {

  render () {
    const { data } = this.props;
    
    const buildGenres = (song) => {
      var genres = []
      song.genres.map(item => {
        genres << item.name
      })
      return genres
    }

    return(
      <div>
        <Share></Share>
        {data.map((item, i) =>
          <ListItemChart 
            position={i + 1}
            album={ item.collectionName }
            image={ item.artworkUrl100 } 
            song={ item.artistName + " — " + item.name } 
            key={ item.id } 
            url={ item.url }
            genres={ buildGenres(item) }
          />
        )}
      </div>
    )
  }
}

export default DataExpanded;