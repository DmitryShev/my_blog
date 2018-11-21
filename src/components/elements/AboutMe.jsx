import React from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    width: '340px', // 345,
    margin: '20px'
  },

  cardBody: {
    margin: 0,
    width: '320px',
    // height: '220px' // '10px'
  },
  media: {
    height: '220px'
  }
};

const AboutMe = ({ classes }) => (
  <Card className={classes.card} elevation={0}>
    <CardContent className={classes.cardBody}>
      <Typography variant="h6" component="h6" >About me</Typography>
      <CardMedia 
        className={classes.media}
        image="https://froot.nl/wp-content/uploads/2016/11/huawei-970x350.jpg"
        title="Contemplative Reptile"
      />
      <Typography component="p" >
        My name is Activello and I am an awesome WordPress blog theme
        for photography, food, travel and other blogs. I was created by colorlib.
      </Typography>
    </CardContent>
  </Card>
);

AboutMe.propTypes = {
  classes: object.isRequired
};

export const About = withStyles(styles)(AboutMe);
