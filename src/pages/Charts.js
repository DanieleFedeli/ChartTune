import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import ChartSingle from '../components/ChartsSingle';

const styles = theme => ({
  link: {
    color: '#000000',
    'text-decoration': 'none'
  },
  container:{
    display: 'grid',
    [theme.breakpoints.down('xl')]: {
      'grid-template-areas': '". . . . ."',
      'grid-template-columns': '1fr 1fr 1fr 1fr 1fr'
    },
    [theme.breakpoints.down('lg')]: {
      'grid-template-areas': '". . . ."',
      'grid-template-columns': '1fr 1fr 1fr 1fr'
    },
    [theme.breakpoints.down('md')]: {
      'grid-template-areas': '". . ."',
      'grid-template-columns': '1fr 1fr 1fr'
    },
    [theme.breakpoints.down('sm')]: {
      'grid-template-areas': '". ."',
      'grid-template-columns': '1fr 1fr'
    },
    [theme.breakpoints.down('xs')]: {
      'grid-template-areas': '"."',
      'grid-template-columns': '1fr'
    },
  }
});

class Charts extends Component {
  render() {
    const { classes } = this.props;
    const country = ['United states', 'France', 'Spain', 'United Kingdom', 'Italy', 'Germany'];
    const renderSingleChart = 
    <div>
      <Link to={`/linechart`} className={classes.link}>
        <span className={classes.linkCaption}>{"See with ChartJS"}</span><img className={classes.linkImage} src="http://www.chartjs.org/img/chartjs-logo.svg" alt="ChartJS Logo" width="50px" />
      </Link>
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