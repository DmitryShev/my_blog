import React from 'react';
import { objectOf, string } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

import { Aside } from './Aside';
import { Posts } from './Posts';

const styles = {

};

const Body = ({ classes }) => (
  <Grid container wrap="nowrap">
    <Grid item sm={8}>
      <Posts />
    </Grid>
    <Grid item sm={4}>
      <Aside />
    </Grid>
  </Grid>
);

Body.propTypes = {
  classes: objectOf(string).isRequired
};

export const Main = withStyles(styles)(Body);

