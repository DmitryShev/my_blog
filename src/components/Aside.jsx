import React from 'react';
import { objectOf, string } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

import { About } from './elements/AboutMe';
import { Follow } from './elements/FollowMe';
import { RecentPosts } from './elements/RecentPosts';
import { Search } from './elements/Search';
import { Categories } from './elements/Categories';

const styles = {

};

const Body = ({ classes }) => (
  <div>
    <About />
    <Follow />
    <RecentPosts />
    <Search />
    <Categories />
  </div>
);

Body.propTypes = {
  classes: objectOf(string).isRequired
};

export const Aside = withStyles(styles)(Body);

