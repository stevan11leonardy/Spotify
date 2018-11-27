import React from 'react';
import PropTypes, { Object } from 'prop-types';
import {
  Card, CardHeader, Avatar, CardMedia, CardContent, Typography, withStyles,
} from '@material-ui/core';
import red from '@material-ui/core/colors/red';

const styles = () => ({
  card: {
    maxWidth: 400,
    cursor: 'pointer',
    position: 'relative',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const BrowseContents = (props) => {
  const {
    classes,
    element,
    index,
    handleClick
  } = props;
  return (
    <div>
      <Card className={classes.card} onClick={() => handleClick(index)}>
        <CardHeader
          avatar={(
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {element.avatar}
            </Avatar>
          )}
          title={element.text}
          subheader={element.subheader}
        />
        <CardMedia
          className={classes.media}
          image={element.image}
          title={element.title}
        />
        <CardContent>
          <Typography component="p">
            {element.caption}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

BrowseContents.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  element: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(BrowseContents);
