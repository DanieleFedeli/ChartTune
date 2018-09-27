import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import classnames from 'classnames';
import {Line} from 'react-chartjs-2';
import queryString from 'query-string';
import LinearProgress from '@material-ui/core/LinearProgress';
import LastFMLogo from '../lastfm.png';
import Flag from "react-flags";

const styles = {
  link: {
    color: '#000000',
    'font-size': '1em',
    'text-decoration': 'none',
    'border': '1px solid #C0C0C0',
    'border-radius': '15px 50px 30px',
    'padding': '5px',
    margin: 10
  },
  root: {
    flexGrow: 1
  }
};

class LineChart extends Component {
  state = {
    err: null,
    loaded: false,
    labels: null,
    country: null,
    countrycode: null,
    datasets: null
  };

  componentDidMount() {
    let params = queryString.parse(this.props.location.search);
    var country = params.country ? params.country : 'all';
  
    var itunesUrl = 'https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/' + country + '/itunes-music/top-songs/all/50/explicit.json';
    
    var countrycode;
    switch (country) {
      case 'SP':
        country = 'Spain';
        countrycode = 'ESP';
        break;
      case 'US':
        country = 'United States';
        countrycode = 'USA';
        break;
      case 'FR':
        country = 'France';
        countrycode = 'FRA';
        break;
      case 'UK':
        country = 'United Kingdom';
        countrycode = 'GBR';
        break;
      case 'IT':
        country = 'Italy';
        countrycode = 'ITA';
        break;
      case 'GR':
        country = 'Greece';
        countrycode = 'GRC';
        break;
      case 'RS':
        country = 'Russia';
        countrycode = 'RUS';
        break;
      case 'PL':
        country = 'Poland';
        countrycode = 'POL';
        break;
      case 'SA':
        country = 'Saudi Arabia';
        countrycode = 'SAU';
        break;
      default:
        country = 'World';
        countrycode = "   ";
        break;
    };

    this.setState({ country: country, countrycode: countrycode });
    
    var labels = [];
    var datasets = [
      {
        label: "# Listeners",
        pointBackgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
        pointStyle: [],
        data: []
      },
      {
        label: "# Plays",
        pointBackgroundColor: "#FE767B",
        borderColor: "#FE767B",
        pointStyle: [],
        data: []
      }
    ];

    fetch(itunesUrl)
      .then(response => response.json())
      .then(itunes => {
        for (let item of itunes.feed.results) {  
          var lastfmUrl = 'http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=5a932a24e44f718c2542eac0fb48309a&artist=' + item.artistName + '&track=' + item.name + '&format=json';
          
          fetch(lastfmUrl)
          .then(response => response.json())
          .then(lastfm => {
              if ('error' in lastfm){
                console.error("LastFM Error: " + item.artistName + " — " + item.name + " not found");
              }
              else{
                labels.push(item.artistName + " — " + item.name);
                datasets[0].data.push(lastfm.track.listeners);
                datasets[1].data.push(lastfm.track.playcount);
              }
          }).then(() => {
            if(itunes.feed.results[itunes.feed.results.length-1] === item) {
              this.setState({ labels: labels, datasets: datasets, loaded: true });
            }
          });
        }
      }
    );
  }

  render() {
    const { classes } = this.props;
    var { loaded, err, labels, datasets, country, countrycode } = this.state;
    
    if (err){
      return(
        <div className="App">
          <Layout yield= {err} ></Layout> 
        </div>
      );
    }
    if (!loaded) {
      const loading = 
      <div className={classes.root}>
        <LinearProgress color="secondary" />
      </div>

      return(
        <div className="App">
          <Layout yield={loading} ></Layout> 
        </div>
      );    
    }

    else{
      var chartData = {
        labels: labels,
        datasets: datasets
      };

      const chartOptions = {
        responsive: true,
        elements: {
          line: {
              tension: 0
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0
            },
          }],
          xAxes: [{
            labels: labels,
            ticks: {
              autoSkip: false,
              maxRotation: 75,
              minRotation: 75
            }
          }]
        }
      };

      const renderChart = 
      <div className={classnames.root}>
        <Flag
          basePath="/img/flags"
          name={countrycode}
          format="png"
          pngSize={16}
          shiny={true}
          alt={country + " Flag "}
        />{country + " — "}
        <a href="https://www.last.fm/" className={classes.link} >
          <span>{"Made with "}<img className={classes.linkImage} src={LastFMLogo} alt="LastFM" width="50px" /></span>
        </a>
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