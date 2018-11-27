import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes, { Object } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import BrowseContents from './BrowseContents';
import GetContent from '../../General/ReuseComponent/Component/GetContent';
import GetImages from '../../General/ReuseComponent/Component/GetImage';
import ChangePage from '../../General/Tools/ChangePage';
import BrowseSubContents from './BrowseSubContents';
import { Button } from '@material-ui/core';

const styles = () => ({
  gridroot: {
    marginLeft: 20,
    fontFamily: 'sans-serif',

    fontSize: 10,
    color: 'grey',
    position: 'static',
  },
});

const BrowseContentLayout = (props) => {
  const { contents, images } = props;
  const ChoosePage = ChangePage(null);
  if (ChoosePage.pageId === null) {
    return (
      <div>
        <Grid container spacing={24}>
          {contents.map((element, key) => (
            <Grid item xs={4} key={key}>
              <BrowseContents
                element={element}
                index={key}
                handleClick={ChoosePage.click}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
  return (
    <React.Fragment>
      <BrowseSubContents
        images={images[ChoosePage.pageId]}
      />
      <Button onClick={() => ChoosePage.click(null)}>Back</Button>
    </React.Fragment>
  );
};

const Browse = (props) => {
  const contents = GetContent();
  const images = GetImages();
  const { classes } = props;
  if (contents !== null && images !== null) {
    return (
      <div className={classes.gridroot}>
        <BrowseContentLayout
          classes={classes}
          contents={contents}
          images={images}
        />
      </div>
    );
  }
  return (
    <div>loading</div>
  );
};

Browse.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

BrowseContentLayout.propTypes = {
  // clickHandler: PropTypes.instanceOf(Object).isRequired,
  contents: PropTypes.instanceOf(Object).isRequired,
  images: PropTypes.instanceOf(Array).isRequired,
};

export default withStyles(styles)(Browse);
