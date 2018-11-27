import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes, { Object } from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Drawer, Hidden } from '@material-ui/core';
import ChangePage from '../General/Tools/ChangePage';
import Browse from './Browse/Browse';
import ActivityCards from './Activity/Activity';

const drawerWidth = 180;

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
});

const SideBar = (props) => {
  const data = ChangePage(0);
  const { classes } = props;
  return (
    <React.Fragment>
      <nav className={classes.drawer}>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
          >
            <div className={classes.toolbar} />
            <List>
              {['Browse', 'Activity'].map((text, index) => (
                <ListItem button key={text} onClick={() => data.click(index)}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {data.pageId === 0 && <Browse classes={classes} />}
        {data.pageId === 1 && <ActivityCards classes={classes} />}
      </div>
    </React.Fragment>
  );
};


SideBar.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(SideBar);
