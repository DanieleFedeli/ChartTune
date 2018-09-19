import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Container from './components/Container';

class App extends Component {
  render() {
    const content = <Container></Container>
    return (
      <div className="App">
        <Toolbar />
        <Container />
        <Footer />
        <Layout yield= {content} ></Layout>
      </div>
    );
  }
}

export default App;
