/* globals window document */
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader';

import './assets/css/styles.css';
import './assets/scss/styles.scss';

import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { About } from './components/elements/AboutMe';

const theme = createMuiTheme();

export const Application = hot(module)(() => (
  <React.Fragment>
    <NavBar />
    <Header />
    <About />
  </React.Fragment>
));
