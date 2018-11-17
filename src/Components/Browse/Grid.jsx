import React from 'react';
import Grid from '@material-ui/core/Grid';
import state from './Content/Content';
import Cards from './Card';

const Grids = props => (
  <div>
    <Grid container spacing={24}>
      {state.map((element, key) => (
        <Grid item xs={4} key={key}>
          <Cards classes={props.classes} element={element} index={key} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Grids;
