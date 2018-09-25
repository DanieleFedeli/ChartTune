import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import classnames from 'classnames';
import {Line} from 'react-chartjs-2';
import queryString from 'query-string';
import LastFMLogo from '../lastfm.png';
import { Link } from 'react-router-dom';


const styles = {
  link: {
    color: '#000000',
    'font-size': '1em',
    'text-decoration': 'none',
    'border': '1px solid #C0C0C0',
    'border-radius': '15px 50px 30px',
    'padding': '5px',
  },
};

class LineChart extends Component {
  state = {
    err: null,
    loaded: false,
    data: null,
    labels: null,
    datasets: null,
  };

  componentDidMount() {
    let params = queryString.parse(this.props.location.search);
    var country = params.country ? params.country : 'all';
    var url = 'https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/' + country + '/itunes-music/top-songs/all/50/explicit.json';

    var labels = [];
    var datasets = [
      {
        label: "# Listeners",
        pointBackgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
        pointStyle: [],
        data: [],
      },
      {
        label: "# Plays",
        pointBackgroundColor: "#FE767B",
        borderColor: "#FE767B",
        pointStyle: [],
        data: [],
      }
    ];

    fetch(url)
      .then(response => response.json())
      .then(data => {
        switch (params.country) {
          case 'SP':
            country = 'Spain';
            break;
          case 'US':
            country = 'United States';
            break;
          case 'FR':
            country = 'France';
            break;
          case 'UK':
            country = 'United Kingdom';
            break;
          case 'IT':
            country = 'Italy';
            break;
          case 'GR':
            country = 'Greece';
            break;
          case 'RS':
            country = 'Russia';
            break;
          case 'PL':
            country = 'Poland';
            break;
          case 'SA':
            country = 'Saudi Arabia';
            break;
          default:
            country = 'Italy';
            break;
        };

        for (let item of data.feed.results) {  
          var itemUrl = 'http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=5a932a24e44f718c2542eac0fb48309a&artist=' + item.artistName + '&track=' + item.name + '&format=json';
          
          fetch(itemUrl)
          .then(response => response.json())
          .then(data => {
              if ('error' in data){
                //console.log("TRACK NOT FOUND: " + item.artistName + " — " + item.name)
              }
              else{
                labels.push(item.artistName + " — " + item.name);

                datasets[0].data.push(data.track.listeners);
                datasets[1].data.push(data.track.playcount);
              }
            }
          );
        }

        this.setState({ labels: labels, datasets: datasets, loaded: true });
    });
  }

  render() {
    const { classes } = this.props;
    var { loaded, err, labels, datasets } = this.state;
    
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
          <Layout yield='Loading Chart...' ></Layout> 
        </div>
      );    
    }

    else{
      var chartData = {
        labels: labels,
        datasets: datasets,
      };

      const chartOptions = {
        elements: {
          line: {
              tension: 0,
          },
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
            },
          }],
          xAxes: [{
            labels: labels,
            ticks: {
              autoSkip: false,
              maxRotation: 75,
              minRotation: 75,
            },
          }]
        },
      };

      const renderChart = 
      <div className={classnames.root}>
        <Link to='https://www.last.fm/' className={classes.link} >
        <span>{"Made with "}<img className={classes.linkImage} src={LastFMLogo} alt="LastFM" width="50px" /></span>
        </Link>
        <Line data={chartData} options={chartOptions} />
      </div>
      return (
        <div className="App">
          <Layout yield= {renderChart}></Layout> 
        </div>
      );
    }
  }
}

LineChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LineChart);