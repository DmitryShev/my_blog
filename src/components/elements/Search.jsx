import React from 'react';
import { objectOf, string } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const styles = {
  container: {
    height: '34px',
  },
  input: {
    color: '#666',
    height: '100%',
    border: '1px solid #E8E8E8',
    borderRadius: '3px 0 0 3px',
    fontSize: '14px',
    boxShadow: 'rgba(0, 0, 0, 0.075) 0px 1px 1px 0px inset',
    paddingLeft: '10px',
    paddingRight: '10px',
    fonFamily: '"Montserrat", sans-serif',
    '&:focus': {
      borderColor: 'blue'
    },
  },
  button: {
    height: '100%',
    fontSize: '12px',
    padding: '8px 20px',
    lineHeight: '16px',
    background: '#f2f2f2',
    borderColor: 'transparent',
    borderRadius: '0 3px 3px 0',
    color: '#696969',
    fontFamily: '"Montserrat", sans-serif',
    transition: 'background-color 0.3s linear',
    '&:hover': {
      background: '#a161bf',
      color: '#fff'
    }
  }
};

const SearchEl = ({ classes }) => (
  <Grid container className={classes.container}>
    <InputBase
      className={classes.input}
      placeholder="Search…"
    />
    <Button className={classes.button}>Search</Button>
  </Grid>
);

SearchEl.propTypes = {
  classes: objectOf(string).isRequired
};

export const Search = withStyles(styles)(SearchEl);
