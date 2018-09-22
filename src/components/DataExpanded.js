import React, { Component } from 'react';
import Share from './Share';
import ListItemChart from './ListItemChart';

class DataExpanded extends Component {
  
  render () {
    const { data } = this.props;
    return(
      <div>
        <Share></Share>
        {data.map((item, i) =>
          <ListItemChart 
            position={i + 1} 
            image={item.image[0]["#text"]} 
            song={item.artist.name + " — " + item.name} 
            key={item.name} 
            playcount={item.playcount} 
            url={item.url}
            listeners={item.listeners}
          />
        )}
      </div>
    )
  }
}

export default DataExpanded;