import React from 'react';
import { objectOf, string } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { SmallPost } from './SmallPost';

const styles = {
  container: {
  },
  line: {
    height: '2px',
    width: '40px',
    marginTop: '8px',
    marginBottom: '8px',
    background: '#a161bf',
  },
  grid: {
    flexDirection: 'column',
    padding: 0
  }
};

const Posts = ({ classes }) => (
  <Card className={classes.container} elevation={0} >
    <CardContent>
      <Typography component="h6" variant="h6">Recent Posts</Typography>
      <div className={classes.line} />
      <Grid container className={classes.grid} spacing={0}>
        <SmallPost />
        <SmallPost />
        <SmallPost />
      </Grid>
    </CardContent>
  </Card>
);

Posts.propTypes = {
  classes: objectOf(string).isRequired
};

export const RecentPosts = withStyles(styles)(Posts);
