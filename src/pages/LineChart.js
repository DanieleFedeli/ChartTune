import React, { Component } from 'react';
import Layout from '../components/Layout';
import classnames from 'classnames';
import {Line} from 'react-chartjs-2';


class LineChart extends Component {
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
          <Layout yield='Caricamento...' ></Layout> 
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


export default LineChart;
