import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickHandler } from '../../Actions/actions';


const Cards = (props) => {
  const { classes, element, index } = props;
  return (
    <Card className={classes.card} onClick={() => clickHandler(index)}>
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
  );
};

Cards.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  element: PropTypes.instanceOf(Object).isRequired,
  clickHandler: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.instanceOf(Object).isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clickHandler }, dispatch);
}

export default connect(null, mapDispatchToProps)(Cards);
