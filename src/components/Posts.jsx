import React from 'react';
import { objectOf, string } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

import { BigPost } from './elements/BigPost';


const styles = {

};

const Post = ({ classes }) => (
  <div>
    <BigPost />
    <BigPost />
  </div>
);

Post.propTypes = {
  classes: objectOf(string).isRequired
};

export const Posts = withStyles(styles)(Post);

