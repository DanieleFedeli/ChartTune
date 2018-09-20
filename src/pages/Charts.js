import React, { Component } from 'react';
import Layout from '../components/Layout';

class Charts extends Component {
  key = '5a932a24e44f718c2542eac0fb48309a';
  state = {
    err: null,
    loaded: false,
    data: null
  };

  componentDidMount() {

    
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=5a932a24e44f718c2542eac0fb48309a&format=json')
      .then(response => response.json())
      .then(data => {
          console.log(data);
          this.setState({ data: data, loaded: true})
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
          <Layout yield= 'Caricamento...' ></Layout> 
        </div>
      );
      
    }

    else{
      return (
        <div className="App">
          <Layout yield= {data} ></Layout> 
        </div>
      );
    }
  }
}


export default Charts;
