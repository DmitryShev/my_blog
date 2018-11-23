import React from 'react';
import { objectOf, string } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';

import SearchIcon from '@material-ui/icons/Search';


const styles = {
  container: {
    '& a': {
      color: '#1c202a',
      textTransform: 'uppercase',
      fontSize: '12px',
      fontWeight: 'bold',
      lineHeight: '2.6',
      letterSpacing: '1px',
      fontFamily: "'Montserrat', sans-serif",
      textDecoration: 'none',
      '&:visited': {
        color: '#1c202a',
      },
      '&:hover': {
        color: '#a161bf',
      }
    },
  },
  grid: {
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center'
  },
  search: {
    margin: '0 10px',
    border: '1px solid',
    '&:hover': {
      border: '1px solid #666'
    },
    '&:focus': {
      border: '1px solid #666',
      width: '400px',
    },
  },


  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    width: '100%'
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};


const NavigationBar = ({ classes, link }) => (
  <div className={classes.container}>
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Grid container className={classes.grid}>
          <Typography>
            <a href={link}>Home</a>
          </Typography>
          <Typography>
            <a href={link}>Features</a>
          </Typography>
          <Typography>
            <a href={link}>Lifestyle</a>
          </Typography>
          <Typography>
            <a href={link}>Travel</a>
          </Typography>
          <Typography>
            <a href={link}>Music</a>
          </Typography>
          <Typography>
            <a href={link}>про меня</a>
          </Typography>
          <Typography>
            <a href={link}>contact</a>
          </Typography>
        </Grid>

        <div>
          <InputBase placeholder="Search…" className={classes.search} />
        </div>
        <div>
          <SearchIcon />
        </div>

      </Toolbar>
    </AppBar>
  </div>
);


NavigationBar.propTypes = {
  classes: objectOf(string).isRequired,
  link: string
};

NavigationBar.defaultProps = {
  link: '#'
};

export const NavBar = withStyles(styles)(NavigationBar);
