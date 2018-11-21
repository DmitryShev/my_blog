import React from 'react';
import { objectOf, string } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


const styles = {
  container: {
    width: '340px',
  },
  cardContent: {
    margin: 0,
    width: '320px',
  },
  line: {
    height: '2px',
    width: '40px',
    marginTop: '8px',
    marginBottom: '8px',
    background: '#a161bf',
  },
  img: {
    height: '220px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    marginTop: '15px',
    marginBottom: '15px',
  },
  article: {
    color: '#696969',
    wordWrap: 'break-word',
    fontFamily: ['LoraRegular', 'serif'].join(','),
    lineHeight: 2,
    fontSize: '14px'
  }
};

const AboutMe = ({ classes }) => (
  <Card className={classes.container} elevation={0}>
    <CardContent className={classes.cardContent}>
      <Typography variant="h6" component="h6">About me</Typography>
      <div className={classes.line} />
      <CardMedia
        className={classes.img}
        image="https://froot.nl/wp-content/uploads/2016/11/huawei-970x350.jpg"
        title="Contemplative Reptile"
      />
      <Typography component="p" className={classes.article}>
        My name is Activello and I am an awesome WordPress blog theme
        for photography, food, travel and other blogs. I was created by colorlib.
      </Typography>
    </CardContent>
  </Card>
);

AboutMe.propTypes = {
  classes: objectOf(string).isRequired
};

export const About = withStyles(styles)(AboutMe);
