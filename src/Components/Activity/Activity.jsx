import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  card: {
    maxWidth: 400,
    cursor: 'pointer',
    size: 'relative',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const Cards = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={(
          <Avatar aria-label="Recipe" className={classes.avatar}>S</Avatar>
        )}
        title="Hello"
        subheader="Mountain"
      />
      <CardMedia
        className={classes.media}
        image="https://cdn.pixabay.com/photo/2017/07/07/21/39/sharp-2482839_960_720.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography component="p">New Album</Typography>
      </CardContent>
    </Card>
  );
};

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);
