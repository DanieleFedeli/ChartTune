import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Container />
      </div>
    );
  }
}

export default App;
