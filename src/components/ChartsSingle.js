import React, { Component } from 'react';
import classnames from 'classnames';
import List from '@material-ui/core/List';
import ListItemChart from './ListItemChart';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    objectFit: 'cover',
  },
  header: {
    width: '100%'
  }
};

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

    fetch(url)
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
    const { data, loaded, err } = this.state;
    const { country, classes } = this.props;

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
        <Card className={classes.card}>
        <CardActionArea className={classes.header}>
          <CardMedia
            component="img"
            className={classes.media}
            height="140"
            src={data[0].image[3]["#text"]}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Top 50 {headerText}
            </Typography>
          </CardContent>
        </CardActionArea>   
        <List dense >
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
           
      </Card>
      );
    }
  }
}


export default withStyles(styles)(ChartSingle);
