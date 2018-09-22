import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import DataExpanded from './DataExpanded';

const styles = theme => ({
  root: {
    width: '100%',
    padding: '0 !important',
    margin: '0 !important'
  },
  content: {
      margin: '0 !important'
  },
  chart: {
    'margin': 5,
    width: 450
  },
  media: {
    objectFit: 'cover',
  },
  header: {
    width: '100%'
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
  notExpanded: {
    'max-height': 225
  }
});

class ChartSingle extends Component {
  state = {
    err: null,
    loaded: false,
    data: null,
    expanded: false,
    clicked: false
  };

  componentDidMount() {
    /* TODO: Hide api key and set it as env variable. Make url more elegant*/
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

  handleChange = () => {
    if(this.state.expanded === true){
      setTimeout(() => {
        this.setState({expanded: !this.state.expanded})
      }, 1000);
    }
    else{
      this.setState({expanded: !this.state.expanded})
    }
  }

  renderExpanded = () => {
    this.setState({clicked: true})
  }

  render() {
    const { data, loaded, err, expanded, clicked } = this.state;
    const { country, classes } = this.props;
    const headerText = country ? country : 'Global';

    /* We check the state of components and we handle 
    error rendering a card with err message */
    if (err){
      return(
        <Card className={classes.chart}>
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
        <Card className={classes.chart}>
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
        <ExpansionPanel className={classNames(classes.chart, {
          [classes.notExpanded]: expanded === false
        })}
          onChange= {this.handleChange}
        >
          
          <ExpansionPanelSummary  
            classes={{
              root: classes.root,
              content: classes.content
            }}
            onClick = {this.renderExpanded}
          >
            <CardActionArea className={classNames(classes.root)}  component='div'>
              <CardMedia 
                component='img'
                className={classes.media} 
                height="140" src={data[0].image[3]["#text"]} 
                title={data[0].name}        
              
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Top 50 {headerText}
                </Typography>
              </CardContent>
            </CardActionArea>
            
          </ExpansionPanelSummary>
          <ExpansionPanelDetails> 
            {clicked ? <DataExpanded data={data} /> : null}
          </ExpansionPanelDetails>
          
        </ExpansionPanel>
      );
    }
  }
}


export default withStyles(styles)(ChartSingle);
