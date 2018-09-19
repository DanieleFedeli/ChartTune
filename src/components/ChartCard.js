import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function ChartCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Icon>share</Icon> Share
        </Button>
        <Button size="small" color="primary">
          <Icon>description</Icon>Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

ChartCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartCard);