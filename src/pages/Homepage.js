import React, { Component } from 'react';
import Layout from '../components/Layout';
import VideoHome from '../components/VideoHome';

class Homepage extends Component {
  render() {
    const content = <div><VideoHome /></div>
    return (
      <div className="App">
        <Layout yield= {content} ></Layout> 
      </div>
    );
  }
}

export default Homepage;
