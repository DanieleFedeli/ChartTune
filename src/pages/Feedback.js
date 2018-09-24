import React from 'react';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '70%',
    margin: '0 auto',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  textArea: {
  }
});

const types = [
  {
    value: 'Bug',
    label: 'Bug',
  },
  {
    value: 'Graphic',
    label: 'Graphic',
  },
  {
    value: 'Security',
    label: 'Security',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

class Feedback extends React.Component {
  state = {
    type: 'Bug',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    const content = 
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="email"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="type"
        select
        label="Feedback Type"
        className={classes.textField}
        value={this.state.type}
        onChange={this.handleChange('type')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select the feedback type"
        margin="normal"
        variant="outlined"
      >
        {types.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="title"
        label="Feedback Title"
        className={classNames(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="message"
        label="Message"
        placeholder="Your message"
        multiline
        className={classNames(classes.textField, classes.textArea)}
        margin="normal"
        variant="outlined"
        fullWidth
      />
    </form>


    return (
      <div className="App">
        <Layout yield= {content} ></Layout> 
      </div>
    );
  }
}

Feedback.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Feedback);
