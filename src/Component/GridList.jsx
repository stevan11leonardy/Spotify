import React from 'react';
import PropTypes, { Object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const styles = theme => ({
  gridListRoot: {
    display: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

class GridLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      index: props.indexs,
      waitLoad: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3004/image')
      .then(resp => resp.json())
      .then(((datas) => {
        this.setState({
          ...this.state,
          images: datas,
          waitLoad: false,
        });
      }));
  }

  render() {
    const { classes, indexs } = this.props;
    const { waitLoad, images } = this.state;
    const Data = images[indexs];
    if (waitLoad === false) {
      return (
        <div className={classes.gridListRoot}>
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
    return (
      <div>loading</div>
    );
  }
}

GridLists.propTypes = {
  indexs: PropTypes.instanceOf(Object).isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles, { withTheme: true })(GridLists);
