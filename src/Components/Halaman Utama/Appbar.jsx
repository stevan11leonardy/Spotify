import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const title = (
  <div>Spotify</div>
);

const Appbar = props => (
  <AppBar position="fixed" className={props.classes.appBar}>
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);


export default Appbar;
