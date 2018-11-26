import React, { Component } from 'react';
import { objectOf, string } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';

// import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';


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
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menu: {
    '& li': {
      color: '#1c202a',
      textTransform: 'uppercase',
      fontSize: '12px',
      fontWeight: 'bold',
      lineHeight: '2.6',
      letterSpacing: '1px',
      fontFamily: "'Montserrat', sans-serif",
    }
  }
};

class NavigationBar extends Component {
  static defaultProps = {
    link: '#'
  }

  static propTypes = {
    classes: objectOf(string).isRequired,
    link: string
  }

  state = {
    anchorEl: null
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { link, classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.container}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Grid container className={classes.grid}>
              <Hidden xsDown>
                <Typography><a href={link}>Home</a></Typography>
                <Typography><a href={link}>Features</a></Typography>
                <Typography><a href={link}>Lifestyle</a></Typography>
                <Typography><a href={link}>Travel</a></Typography>
                <Typography><a href={link}>Music</a></Typography>
                <Typography><a href={link}>про меня</a></Typography>
                <Typography><a href={link}>contact</a></Typography>
              </Hidden>
            </Grid>

            <div>
              <Hidden smUp>
                <IconButton aria-haspopup="true" onClick={this.handleClick} aria-owns={anchorEl ? 'simple-menu' : undefined}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                  className={classes.menu}
                >
                  <MenuItem onClick={this.handleClose}>Home</MenuItem>
                  <MenuItem onClick={this.handleClose}>Features</MenuItem>
                  <MenuItem onClick={this.handleClose}>Lifestyle</MenuItem>
                  <MenuItem onClick={this.handleClose}>Travel</MenuItem>
                  <MenuItem onClick={this.handleClose}>Music</MenuItem>
                  <MenuItem onClick={this.handleClose}>About me</MenuItem>
                  <MenuItem onClick={this.handleClose}>Contact</MenuItem>
                </Menu>
              </Hidden>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export const NavBar = withStyles(styles)(NavigationBar);
