import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickHandler } from '../../Actions/actions';

const Cards = props => (
  <Card className={props.classes.card} onClick={() => props.clickHandler(props.index)}>
    <CardHeader
      avatar={(
        <Avatar aria-label="Recipe" className={props.classes.avatar}>
          {props.element.avatar}
        </Avatar>
      )}
      title={props.element.text}
      subheader={props.element.subheader}
    />
    <CardMedia
      className={props.classes.media}
      image={props.element.image}
      title={props.element.title}
    />
    <CardContent>
      <Typography component="p">
        {props.element.caption}
      </Typography>
    </CardContent>
  </Card>
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clickHandler }, dispatch);
}

export default connect(null, mapDispatchToProps)(Cards);
