import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import Grids from './Grid';
import GridList from './GirdList/GridList';
import { clickBack } from '../../Actions/actions';

const Browse = (props) => {
  const { classes } = props;
  if (props.istekan === false) {
    return (
      <div className={classes.root}>
        <Grids classes={classes} />
      </div>
    );
  }
  return (
    <div>
      <GridList />
      <Button variant="contained" color="primary" className={classes.button} onClick={props.clickBack}>Back</Button>
    </div>
  );
};

Browse.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    istekan: state.data.istekan,
  };
}

function mapDispatchToProps(dispatch) {
  return ({
    clickBack: bindActionCreators(clickBack, dispatch),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Browse));
