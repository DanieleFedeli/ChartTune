import React from 'react';
import Layout from '../components/Layout';

class Feedback extends React.Component { 
  render() {
    const content = 'Hello you are on Feedback page'
    return (
      <div className="App">
        <Layout yield= {content} ></Layout> 
      </div>
    );
  }
}


export default Feedback;