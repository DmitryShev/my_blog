import React from 'react';
import { objectOf, string } from 'prop-types';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    width: '260px',
    height: '80px'
  }
};

const RecentPosts = ({ classes }) => (
  <Card className={classes.container}>
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      className={classes.media}
      height="80"
      width="80"
      image="/static/images/cards/contemplative-reptile.jpg"
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Lizard
      </Typography>
      <Typography component="p">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
        across all continents except Antarctica
      </Typography>
    </CardContent>
  </Card>
);

export const LatestPosts = withStyles(styles)(RecentPosts);
