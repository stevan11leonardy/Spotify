import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Browse from '../Browse/Browse';
import Activity from '../Activity/Activity';
import styles from './styles'
import Nav from './Navigation'
import AppbarHeader from './Appbar';

class Tampilan extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pageId: 0,
    }
  }

  onClickHandler = (key) => {
    this.setState({
      pageId: key,
    })
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppbarHeader classes={classes} />    
          <Nav classes={classes} theme={theme} onClickHandlers={this.onClickHandler}/>
        <div className={classes.content}>
          <div className={classes.toolbar}/>
          {this.state.pageId === 0 && <Browse/>}
          {this.state.pageId === 1 && <Activity/>}
        </div>
      </div>
    );
  }
}

Tampilan.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Tampilan);