import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import ChartSingle from '../components/ChartsSingle';

const styles = {
  link: {
    color: '#000000',
    'text-decoration': 'none'
  },
  linkCaption: {
  },
  linkImage: {
  }
};

class Charts extends Component {
  render() {
    const country = ['Spain', 'Italy', 'France', 'UnitedStatesOfAmerica'];
    const renderSingleChart = 
      <div>
        <Link to={`/linechart`} className={classes.link}>
          <span className={classes.linkCaption}>{"See with ChartJS"}</span><img className={classes.linkImage} src="http://www.chartjs.org/img/chartjs-logo.svg" alt="ChartJS Logo" width="50px" />
        </Link>
        <ChartSingle key={'global'}/>
        {country.map((c)  =>  <ChartSingle country={c} key={c} />)}
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