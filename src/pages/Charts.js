import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import ChartSingle from '../components/ChartsSingle';

const styles = {
  container:{
    display: 'flex',
    'align-items': 'flex-start',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    'columns': '20rem',
  }
};

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