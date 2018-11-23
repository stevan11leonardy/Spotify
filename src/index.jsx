import React, { useState } from 'react';
import PropTypes, { Object } from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Browse from './Component/Browse';
import ActivityCards from './Component/Activity';


const drawerWidth = 180;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      backgroundColor: '#282828',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
});

const handleClick = (defaultKey) => {
  const [pageId, setPageId] = useState(defaultKey);
  function click(key) {
    setPageId(key);
  }

  return {
    pageId,
    onClick: click,
  };
};

const Drawers = (props) => {
  const { classes, onClickHandler } = props;
  return (
    <div>
      <div className={classes.toolbar} />
      <List>
        {['Browse', 'Activity'].map((text, index) => (
          <ListItem button key={text} onClick={() => onClickHandler(index)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const Navigation = (props) => {
  const { classes, theme, onClickHandler } = props;
  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Drawers
            classes={classes}
            onClickHandler={onClickHandler}
          />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
        >
          <Drawers
            classes={classes}
            onClickHandler={onClickHandler}
          />
        </Drawer>
      </Hidden>
    </nav>
  );
};


const Appbar = (props) => {
  const { classes } = props;
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>Spotify</Typography>
      </Toolbar>
    </AppBar>
  );
};


const App = (props) => {
  const data = handleClick(0);
  const { classes, theme } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Appbar classes={classes} />
      <Navigation classes={classes} theme={theme} onClickHandler={data.onClick} />
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {data.pageId === 0 && <Browse classes={classes} />}
        {data.pageId === 1 && <ActivityCards classes={classes} />}
      </div>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
};

Navigation.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
  onClickHandler: PropTypes.instanceOf(Object).isRequired,
};

Appbar.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

Drawers.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  onClickHandler: PropTypes.instanceOf(Object).isRequired,
};


const Apps = withStyles(styles, { withTheme: true })(App);

ReactDOM.render(<Apps />, document.getElementById('root'));
