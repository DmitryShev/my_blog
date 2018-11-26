import React from 'react';
import { objectOf, string } from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import { Carusel } from './elements/Carusel';

const styles = {
  container: {
    marginTop: '64px',
    textAlign: 'center',
  },
  header: {
    marginTop: '64px',
    height: '168px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    '& h1': {
      color: '#337ab7',
    },
    '& p': {
      color: '#696969',
      fontSize: '14px',
      letterSpacing: '1px',
      lineHeight: '28px'
    }
  },
};

const Heading = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.header}>
      <Typography variant="h1">
        Activello
      </Typography>
      <Typography variant="body1">
        Minimal worldpress theme for bloggers
      </Typography>
    </div>
    <Carusel />
  </div>
);

Heading.propTypes = {
  classes: objectOf(string).isRequired
};

export const Header = withStyles(styles)(Heading);
