import React, { Component } from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Container from '../components/Container';

class Homepage extends Component {
  render() {
    const content = <div><Container></Container><Footer></Footer></div>
    return (
      <div className="App">
        <Layout yield= {content} ></Layout> 
      </div>
    );
  }
}

export default Homepage;
