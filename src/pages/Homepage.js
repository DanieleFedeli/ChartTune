import React, { Component } from 'react';
import Layout from '../components/Layout';
import VideoHome from '../components/VideoHome';
import TextHome from '../components/TextHome';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    margin: 10
  }
}
class Homepage extends Component {
  render() {
    const { classes } = this.props;
    const content = (
      <div>
        <VideoHome />
        <TextHome />
        <TextHome />
        <TextHome />
        <Button variant="raised" color="secondary" className={classes.button} >Sign in</Button>
        
        <Button variant="raised" color="primary" className={classes.button}>Sign up</Button>
      </div>
    )
    return (
      <div className="App">
        <Layout yield= {content} ></Layout> 
      </div>
    );
  }
}

export default withStyles(styles)(Homepage);
