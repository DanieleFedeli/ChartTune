import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChartCard from './ChartCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Container extends React.Component {
  state = {
    spacing: '24',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={24}>
        <Grid container item xs={12} justify="center" spacing={Number(spacing)}>
          <Grid>
            <ChartCard title="Top World" description="Here find the chart for top tunes on the world"/>
          </Grid>

          <Grid>
            <ChartCard title="Your Country Top 10" description="Here find the chart of top 10 tunes on your country"/>
          </Grid>
        </Grid>

        <Grid container item xs={12} justify="center">
          <Grid>
            <ChartCard title="Top Generds" description="Here find the chart for world's top music genders"/>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);