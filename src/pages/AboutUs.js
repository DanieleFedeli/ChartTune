import React, { Component } from 'react';
import Layout from '../components/Layout';


class AboutUs extends Component {
  render() {
    const content = 'Hello you are on AboutUs page'
    return (
      <div className="App">
        <Layout yield= {content} ></Layout> 
      </div>
    );
  }
}


export default AboutUs;
