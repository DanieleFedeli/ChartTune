import React, { Component } from 'react';
import Layout from '../components/Layout';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core';
import classnames from 'classnames';
import List from '@material-ui/core/List';

const styles = theme => ({
  root: {
    flex: 0
  }
});


class Charts extends Component {
  state = {
    err: null,
    loaded: false,
    data: null
  };

  
  componentDidMount() {

    
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=5a932a24e44f718c2542eac0fb48309a&format=json')
      .then(response => response.json())
      .then(data => {
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
    const { classes } = this.props;
    const { data, loaded, err } = this.state;
    
    console.log(this.state);
    if (err){
      return(
        <div className="App">
          <Layout yield= {err} ></Layout> 
        </div>
      );
    }
    if (!loaded) {
      return(
        <div className="App">
          <Layout yield= 'Caricamento...' ></Layout> 
        </div>
      );    
    }

    else{
      const renderListItems = 
      <div className={classnames.root}>
        <List dense>
          {data.map((item, i) =>
            <ListItem button>
              <ListItemText secondary={i + 1} key={i} className={classes.root} />
              <ListItemText secondary={<img src={item.image[0]["#text"]} key={i} />} />
              <ListItemText primary={item.artist.name + " — " + item.name} key={i} />
            </ListItem>
          )}
        </List>
      </div>
      return (
        <div className="App">
          <Layout yield= {renderListItems}></Layout> 
        </div>
      );
    }
  }
}


export default withStyles(styles, { withTheme: true })(Charts);
