import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { SocialIcon } from 'react-social-icons';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

const sociallink = {
  height: 35,
  width: 35,
  margin: 5
}

function TeamCard(props) {
  const { classes } = props;
  
  return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            height="200"
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
          <SocialIcon url={props.github} style={sociallink} />
          <SocialIcon url={props.instagram} style={sociallink} />
          <SocialIcon url={props.linkedin} style={sociallink} />
        </CardActions>
      </Card>
  );
}

TeamCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamCard);
