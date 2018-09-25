import React, { Component } from 'react';
import Layout from '../components/Layout';
import classnames from 'classnames';
import {Line} from 'react-chartjs-2';
import queryString from 'query-string';
import LastFMLogo from '../lastfm.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
    data: null
  };

  componentDidMount() {
    let params = queryString.parse(this.props.location.search);
    var country;

    switch (params.country) {
      case 'SP':
        country = 'Spain';
        break;
      case 'US':
        country = 'United States of America';
        break;
      case 'FR':
        country = 'France';
        break;
      case 'UK':
        country = 'United Kingdom of Great Britain and Northern Ireland';
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
    }

    fetch('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=' + country + '&api_key=5a932a24e44f718c2542eac0fb48309a&format=json')
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

      for (let item of data) {
        /*
        var chartImage = new Image();
        chartImage.src = item.image[0]["#text"];
        chartImage.borderRadius = '50%';
        */

        var label = item.artist.name + " — " + item.name;
        labels.push(label);

        //datasets[0].pointStyle.push(chartImage);
        datasets[0].data.push(item.listeners);
        datasets[1].data.push(item.playcount);
      }

      var chartData = {
        labels: labels,
        datasets: datasets
      };

      const chartOptions = {
        elements: {
          line: {
              tension: 0
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0
            }
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

      const renderListItems = 
      <div className={classnames.root}>
        <Link to='https://www.last.fm/' className={classes.link} >
        <span>{"Made with "}<img className={classes.linkImage} src={LastFMLogo} alt="LastFM" width="50px" /></span>
        </Link>
        <Line data={chartData} options={chartOptions} />
      </div>
      return (
        <div className="App">
          <Layout yield= {renderListItems}></Layout> 
        </div>
      );
    }
  }
}

LineChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LineChart);