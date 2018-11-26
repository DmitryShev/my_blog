import React from 'react';
import { objectOf, string } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.5
    }
  },
  cardContent: {
    padding: 0
  },
  grid: {

  },
  cardMedia: {
    width: '80px',
    height: '80px'
  },
  content: {
    fontStyle: 'italic',
    color: '#393939',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'all 0.3s',
    cursor: 'pointer',
    fontFamily: ['LoraItalic', 'serif'].join(','),
    textTransform: 'capitalize',
  },
  contentDate: {
    fontSize: '12px',
    color: '#696969',
    fontStyle: 'italic',
    fontFamily: ['LoraItalic', 'serif'].join(','),
    lineHeight: 2
  }
};

const Post = ({ classes }) => (
  <Card elevation={0} className={classes.container}>
    <CardContent className={classes.cardContent}>
      <Grid container spacing={8}>
        <Grid item>
          <CardMedia
            className={classes.cardMedia}
            image="https://cs6.pikabu.ru/post_img/2014/05/15/10/1400167833_1703122734.jpg" // eslint-disable-line max-len
            title="Image title"
          />
        </Grid>
        <Grid item>
          <Typography component="h3" variant="h6" className={classes.content}>
            Post Format: Standard
          </Typography>
          <Typography component="body1" variant="subtitle2" className={classes.contentDate}>
            - 05 Oct , 2016
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

Post.propTypes = {
  classes: objectOf(string).isRequired
};

export const SmallPost = withStyles(styles)(Post);
