import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import ChartSingle from '../components/ChartsSingle';

const styles = theme => ({
  container:{
    display: 'grid',
    gridTemplateAreas: '". . . . ."',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    [theme.breakpoints.down('lg')]: {
      gridTemplateAreas: '". . . ."',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateAreas: '". . ."',
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateAreas: '". . "',
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateAreas: '"."',
      gridTemplateColumns: '1fr',
    },
  }
});

class Charts extends Component {
  render() {
    const { classes } = this.props;
    const country = 
    ['US', 'FR', 'SP', 'UK', 'IT', 'GR',
    'RS', 'PL', 'SA'];
    const renderSingleChart = 
    <div>
      <div className={classes.container}>   
        <ChartSingle key={'global'}/> 
        {country.map((c)  =>  <ChartSingle country={c} key={c} />)}
      </div>
    </div>
    return (
      <div className="App">
        <Layout yield= {renderSingleChart} ></Layout> 
      </div>
    );
  }
}

Charts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Charts);