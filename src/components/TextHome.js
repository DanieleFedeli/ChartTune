import React, { Component} from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  infoText: {
    margin: 5,
    color: '#666666'
  }
}

class TextHome extends Component {
  render() {
    const { classes } = this.props;
    return(
      <Typography variant="body1" className={classes.infoText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna est, tincidunt non eros vitae, placerat pharetra est. Curabitur egestas lacinia libero, nec sollicitudin mauris interdum sit amet. Phasellus at rhoncus erat. Mauris eu cursus lectus. Etiam ultrices massa vel tristique vehicula. Sed at tempor magna, non laoreet est. Nulla eu aliquam diam, sit amet volutpat metus. Nulla turpis erat, scelerisque et laoreet et, varius eu nunc. Suspendisse feugiat est sit amet fermentum molestie. Fusce at consequat ipsum. Nunc aliquam, erat sed accumsan mattis, ex lectus varius mi, sit amet hendrerit nulla lorem at tortor. Etiam quis risus convallis, tristique enim nec, vestibulum lorem. Sed vehicula ligula cursus, ultrices odio sed, ultricies sem. Aenean et ligula orci. 
      </Typography>
    );
  }
}

export default withStyles(styles)(TextHome);