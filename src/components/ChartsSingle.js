import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItemChart from './ListItemChart';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  card: {
    margin: 10
  },
  media: {
    objectFit: 'cover',
  },
  header: {
    width: '100%'
  },
  progress: {
    margin: theme.spacing.unit * 2,
  }
});

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
    const headerText = country ? country : 'Global';

    if (err){
      return(
        <Card className={classes.card}>
        <CardActionArea className={classes.header}>
          <Typography>
            Errore nel fetching
          </Typography>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Top 50 {headerText}
            </Typography>
          </CardContent>
        </CardActionArea>   
        <List dense >
          {err}
        </List>
      </Card>
      );
    }

    if (!loaded) {
      return(
        <Card className={classes.card}>
          <CardActionArea className={classes.header}>
            <CircularProgress className={classes.progress} />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Top 50 {headerText}
                </Typography>
              </CardContent>
          </CardActionArea>   
          <List dense >
            <CircularProgress className={classes.progress} />
          </List>
        </Card>
      );    
    }

    else{
      return (
        <Card className={classes.card}>
          <CardActionArea className={classes.header}>
            <CardMedia
              component="img"
              className={classes.media}
              height="140"
              src={data[0].image[3]["#text"]}
              title={data[0].name}
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
