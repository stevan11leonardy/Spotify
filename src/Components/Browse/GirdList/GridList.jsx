import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import data from './data';
import styles from './style';


function SingleLineGridList(props) {
  const { classes } = props;
  const Data = [data[props.data1]];
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {Data.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={(
                <IconButton>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              )}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  data1: state.data.data,
});


export default connect(mapStateToProps)(withStyles(styles)(SingleLineGridList));
