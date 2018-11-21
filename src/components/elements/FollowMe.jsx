import React from 'react';
import { objectOf, string } from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import vk from '../../assets/img/vk.svg';
import tw from '../../assets/img/twitter.svg';
import fb from '../../assets/img/facebook.svg';

const styles = {
  container: {
    width: '340px'
  },
  line: {
    height: '2px',
    width: '40px',
    marginTop: '8px',
    marginBottom: '8px',
    background: '#a161bf',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgSize: {
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    margin: '3px',
    '&:hover': {
      opacity: 0.8
    }
  }
};

const FollowMe = ({ classes }) => (
  <Card elevation={0} className={classes.container}>
    <CardContent>
      <Typography variant="h6" component="h6" >Follow me</Typography>
      <div className={classes.line} />
      <div className={classes.root}>
        <img src={vk} alt="vkontakte" className={classes.imgSize} />
        <img src={fb} alt="facebook" className={classes.imgSize} />
        <img src={tw} alt="twitter" className={classes.imgSize} />
      </div>
    </CardContent>
  </Card>
);

FollowMe.propTypes = {
  classes: objectOf(string).isRequired
};

export const Follow = withStyles(styles)(FollowMe);
