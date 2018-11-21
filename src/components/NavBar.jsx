import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
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


export const NavBar = () => (
  <div className={styles.root} >
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Button color="primary">Home</Button>
        <Button color="primary">Features</Button>
        <Button color="primary">Lifestyle</Button>
        <Button color="primary">Travel</Button>
        <Button color="primary">Music</Button>
        <Button color="primary">about me</Button>
        <Button color="primary">contact</Button>

        <div >
          <div >
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
          />
        </div>

      </Toolbar>
    </AppBar>
  </div>
);
