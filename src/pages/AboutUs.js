import React, { Component } from 'react';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TeamCard from '../components/TeamCard';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1
  }
};

class AboutUs extends Component {

  state = {
    spacing: '24',
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    const content = 
    
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={Number(spacing)}>
          <Grid item>
            <TeamCard 
              title="Michele Anselmi" 
              image="https://avatars2.githubusercontent.com/u/32765589?s=400&u=07cd34ec4235e9a2443fc69c0e13155f26a11426&v=4" 
              description="Coding since when 15 years old, now studying Computer Engineering at 'Sapienza' University of Rome" 
              github="https://github.com/Mikyxello" 
              instagram="https://www.instagram.com/mikyxello/"
              linkedin="https://www.linkedin.com/in/michele-a-216601158/"
            />
          </Grid>
          <Grid item>
            <TeamCard 
              title="Daniele Fedeli" 
              image="https://avatars3.githubusercontent.com/u/37077048?s=400&v=4" 
              description="Student in Computer Engineering at 'Sapienza' University of Rome since 2015." 
              github="https://github.com/DanieleFedeli"
              instagram="https://www.instagram.com/letsfed/"
              linkedin="https://www.linkedin.com/in/daniele-fedeli-a8725415b/"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
      
    
    return (
      <div className="App">
        <Layout yield= {content} ></Layout> 
      </div>
    );
  }
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs);