import React from 'react';
import { objectOf, string } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    textAlign: 'center',
    color: '#696969',
    width: '720px',
    margin: '0 auto',
  },
  cardContent: {
    borderBottom: '1px solid #dedede',
  },
  header: {
    fontSize: '12px',
    wordWrap: 'break-word',
    '& a': {
      textDecoration: 'none',
      '&:visited': {
        color: '#696969',
      },
      '&:hover': {
        color: '#a161bf',
      }
    }
  },
  postHeading: {
    wordWrap: 'break-word',
    fontFamily: '"LoraItalic", serif',
    fontSize: '24px',
    lineHeight: 2,
    color: '#444',
    '& a': {
      textDecoration: 'none',
      '&:visited': {
        color: '#444',
      },
      '&:hover': {
        color: '#a161bf',
      }
    }
  },
  postDate: {
    fontFamily: "'LoraRegular', serif",
    lineHeight: 2,
    fontSize: '14px',
    color: '#696969'
  },
  cardMedia: {
    maxWidth: '710px',
    maxHeight: '335px',
    margin: '20px auto',
  },
  postDescription: {
    fontFamily: "'LoraRegular', serif",
    lineHeight: 2,
    fontSize: '14px',
    color: '#696969',
    textAlign: 'left'
  },
  line: {
    height: '2px',
    width: '40px',
    marginTop: '8px',
    marginBottom: '8px',
    background: '#a161bf',
    margin: '0 auto'
  },
  readMoreButton: {
    borderLeft: '2px solid #696969',
    borderRight: '2px solid #696969',
    color: '#696969',
    fontFamily: 'sans-serif',
    fontWeight: '700',
    lineHeight: '1.2',
    letterSpacing: '1px',
    padding: '0 10px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    '&:visited': {
      color: '#444',
    },
    '&:hover': {
      color: '#a161bf',
    }
  }
};

const Post = ({
  classes,
  postFormat,
  postLink,
  postHeading,
  postDate
}) => (
  <Card elevation={0} className={classes.container}>
    <CardContent className={classes.cardContent}>
      <Typography variant="h6" component="h6" className={classes.header}>
        <a href={postLink}>
          {postFormat}
        </a>
      </Typography>
      <div className={classes.line} />

      <Typography variant="h2" component="h2" className={classes.postHeading}>
        <a href={postLink}>
          {postHeading}
        </a>
      </Typography>

      <Typography variant="body1" component="body1" className={classes.postDate}>
        {postDate}
      </Typography>

      <CardMedia
        component="img"
        className={classes.cardMedia}
        image="https://cs6.pikabu.ru/post_img/2014/05/15/10/1400167833_1703122734.jpg"
        title="Image title"
      />

      <Typography component="p" variant="p" className={classes.postDescription}>
        All children, except one, grow up. They soon know that they will grow up,
        and the way Wendy knew was this.
      </Typography>

      <Typography>
        <a href={postLink} className={classes.readMoreButton}>
          Read more
        </a>
      </Typography>
    </CardContent>
  </Card>
);

Post.propTypes = {
  classes: objectOf(string).isRequired,
  postFormat: string,
  postLink: string,
  postHeading: string,
  postDate: string
};

Post.defaultProps = {
  postFormat: 'Post formats',
  postLink: '#',
  postHeading: 'Post Format: Standard',
  postDate: 'Posted on October 5, 2016 by Aigars'
};

export const BigPost = withStyles(styles)(Post);
