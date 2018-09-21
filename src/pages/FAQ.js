import React from 'react';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '70%',
    margin: '0 auto'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class FAQ extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    const content = 
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>What's CharTune?</Typography>
          <Typography className={classes.secondaryHeading}>Discover what is CharTune</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            CharTune is a ReactJS Web App that let its user to get the top tunes on the world, views into various lists or charts.
            Users can navigate through pages of various country top tunes' charts and see which track is the most listened.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Which API is CharTune using?</Typography>
          <Typography className={classes.secondaryHeading}>
            Our API usage
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            To make all this possible, CharTune uses Last.fm ®: it provides all the tunes rankings on the world, for each country or music gender.
            It also uses ChartJS ® for creating incredibles graphic charts. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Which Web Framework is CharTune using?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            For web styles we use the free framework 'Material UI' ®, which provide awesome CSS and JS library for ReactJS, as you can see.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Personal data</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            We hide your personal data as per GDPR regulation for privacy.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>CharTune Trademark</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            CharTune™ is a registered mark and it's under GNU license (see the official GitHub CharTune page for information about).
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>

    return (
      <div className="App">
        <Layout yield= {content} ></Layout> 
      </div>
    );
  }
}

FAQ.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQ);
