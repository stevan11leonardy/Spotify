import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Drawers from './drawers';

const Navigation = props => (
  <nav className={props.classes.drawer}>
    <Hidden smUp implementation="css">
      <Drawer
        anchor={props.theme.direction === 'rtl' ? 'right' : 'left'}
        classes={{
          paper: props.classes.drawerPaper,
        }}
      >
        <Drawers
          classes={props.classes}
          onClickHandler={props.onClickHandlers}
        />
      </Drawer>
    </Hidden>
    <Hidden xsDown implementation="css">
      <Drawer
        classes={{
          paper: props.classes.drawerPaper,
        }}
        variant="permanent"
      >
        <Drawers
          classes={props.classes}
          onClickHandler={props.onClickHandlers}
        />
      </Drawer>
    </Hidden>
  </nav>
);

export default Navigation;
