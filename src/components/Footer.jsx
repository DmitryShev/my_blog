import React from 'react';
import { objectOf, string } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  container: {
    height: '180px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '12px',
    color: '#696969',
  }

};

const Foo = ({ classes }) => (
  <Grid container className={classes.container}>
    <Typography className={classes.text}>
      Activello. Theme by Colorlib Powered by WordPress
    </Typography>
  </Grid>
);

Foo.propTypes = {
  classes: objectOf(string).isRequired
};

export const Footer = withStyles(styles)(Foo);
