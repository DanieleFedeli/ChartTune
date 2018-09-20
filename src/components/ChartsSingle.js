import React, { Component } from 'react';
import classnames from 'classnames';
import List from '@material-ui/core/List';
import ListItemChart from './ListItemChart';
import ListSubheader from '@material-ui/core/ListSubheader';

class ChartSingle extends Component {
  state = {
    err: null,
    loaded: false,
    data: null
  };
  
  componentDidMount() {
    var url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=5a932a24e44f718c2542eac0fb48309a&format=json';
    if (this.props.country){
      url = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country='+this.props.country+'&api_key=5a932a24e44f718c2542eac0fb48309a&format=json'
    }

    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          if ('error' in data){
            this.setState({err: data.message, loaded: false})
          }
          else{
            this.setState({ data: data.tracks.track, loaded: true})
          }  
        }
      );
  }

  render() {
    const { data, loaded, err } = this.state;
    const { country } = this.props;

    if (err){
      return(
        <div className={classnames.App}>
          {err} 
        </div>
      );
    }
    if (!loaded) {
      return(
        <div className={classnames.App}>
          <span>Caricamento...</span>
        </div>
      );    
    }

    else{
      const headerText = country ? country : 'Global';
       
      return (
        <div className={classnames.App}>
        <List dense 
          subheader={<ListSubheader component="div">Top 50 {headerText}</ListSubheader>}
        >
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
        </List>
      </div>
      );
    }
  }
}


export default ChartSingle;
