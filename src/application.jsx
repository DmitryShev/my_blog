/* globals window document */
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader';

import './assets/css/styles.css';
import './assets/scss/styles.scss';

import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Carusel } from './components/elements/Carusel';
import { About } from './components/elements/AboutMe';
import { Follow } from './components/elements/FollowMe';
import { RecentPosts } from './components/elements/RecentPosts';
import { Search } from './components/elements/Search';
import { Categories } from './components/elements/Categories';
import { BigPost } from './components/elements/BigPost';


const theme = createMuiTheme({
  typography: {

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
    <RecentPosts />
    <Search />
    <Categories />
    <Carusel />
    <BigPost />
    <Footer />
  </MuiThemeProvider>
));
