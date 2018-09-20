import React, { Component } from 'react';
import Layout from '../components/Layout';
import ChartContainer from '../components/ChartContainer';


class Homepage extends Component {
  render() {
    const content = <div><ChartContainer /></div>
    return (
      <div className="App">
        <Layout yield= {content} ></Layout> 
      </div>
    );
  }
}

export default Homepage;
