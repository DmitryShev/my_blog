/* globals window document */
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader';

import './assets/css/styles.css';
import './assets/scss/styles.scss';

import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { About } from './components/elements/AboutMe';
import { Follow } from './components/elements/FollowMe';


const theme = createMuiTheme({
  typography: {
    /*fontFamily: [
      'LoraRegular',
      'LoraItalic',
      'LoraBold',
      'LoraBoldItalic'
    ].join(','), */
    /*fontFamily: [
      'LoraRegular',
    ].join(','),*/
    h6: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      textTransform: 'uppercase',
      color: '#636467',
      lineHeight: 2,
      fontSize: '14px',
      letterSpacing: '0.03em'
    }
  },
});

export const Application = hot(module)(() => (
  <MuiThemeProvider theme={theme}>
    <NavBar />
    <Header />
    <About />
    <Follow />
  </MuiThemeProvider>
));
