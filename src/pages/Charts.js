import React, { Component } from 'react';
import Layout from '../components/Layout';
import ChartSingle from '../components/ChartsSingle';

class Charts extends Component {
  render() {
    const country = ['Spain', 'Italy', 'France', 'United States of America'];
    const renderSingleChart = 
      <div>
        <ChartSingle key={'global'}/>
        {country.map((c)  =>  <ChartSingle country={c} key={c} />)}
      </div>
    return (
      <div className="App">
        <Layout yield= {renderSingleChart} ></Layout> 
      </div>
    );
  }
}

export default Charts;