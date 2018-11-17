import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Drawers = props => (
  <div>
    <div className={props.classes.toolbar} />
    <List>
      {['Browse', 'Activity'].map((text, index) => (
        <ListItem button key={text} onClick={() => props.onClickHandler(index)}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </div>
);

export default Drawers;
