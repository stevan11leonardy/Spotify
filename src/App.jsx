import React from 'react';
import PropTypes, { Object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Component/Header';
import SideBar from './Component/SideBar';

const styles = () => ({
  root: {
    display: 'flex',
  },
});

const App = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <SideBar />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(App);
