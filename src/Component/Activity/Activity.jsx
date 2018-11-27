import React from 'react';
import PropTypes, { object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';


const styles = () => ({
  activityCard: {
    maxWidth: 400,
    cursor: 'pointer',
    size: 'relative',
  },
  activityMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatarCard: {
    backgroundColor: red[500],
  },

});

const ActivityCards = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.activityCard}>
      <CardHeader
        avatar={(
          <Avatar aria-label="Recipe" className={classes.avatarCard}>S</Avatar>
          )}
        title="Hello"
        subheader="Mountain"
      />
      <CardMedia
        className={classes.activityMedia}
        image="https://cdn.pixabay.com/photo/2017/07/07/21/39/sharp-2482839_960_720.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography component="p">New Album</Typography>
      </CardContent>
    </Card>
  );
};

ActivityCards.propTypes = {
  classes: PropTypes.instanceOf(object).isRequired,
};

export default withStyles(styles)(ActivityCards);
