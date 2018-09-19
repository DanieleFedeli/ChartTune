import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import Container from './components/Container';

class App extends Component {
  render() {
    const content = <Container></Container>
    return (
      <div className="App">
        <Layout yield= {content} ></Layout>
      </div>
    );
  }
}

export default App;
