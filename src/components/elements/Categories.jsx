import React from 'react';
import { objectOf, string } from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
  },
  line: {
    height: '2px',
    width: '40px',
    marginTop: '8px',
    marginBottom: '8px',
    background: '#a161bf',
  },
  ul: {
    color: '#393939',
    paddingLeft: 0,
    '& a': {
      color: '#393939',
      textDecoration: 'none',
      '& :visited': {
        color: '#393939'
      }
    },
    '& span': {
      float: 'right'
    },
    '& li': {
      lineHeight: '18px',
      fontSize: '14px',
      listStyle: 'none',
      borderBottom: '1px solid #F2F2F2',
      marginBottom: '10px',
      paddingBottom: '10px'
    }
  }
};

const Category = ({ classes, link }) => (
  <Card elevation={0} className={classes.container}>
    <CardContent>
      <Typography variant="h6" component="h6">Categories</Typography>
      <div className={classes.line} />
      <ul className={classes.ul}>
        <li><a href={link}>Post Formats</a><span>11</span></li>
        <li><a href={link}>Template</a><span>3</span></li>
        <li><a href={link}>Cat A</a><span>21</span></li>
        <li><a href={link}>Edge Case</a><span>152</span></li>
        <li><a href={link}>Cat B</a><span>2</span></li>
      </ul>
    </CardContent>
  </Card>
);

Category.propTypes = {
  classes: objectOf(string).isRequired,
  link: string
};

Category.defaultProps = {
  link: '#'
};

export const Categories = withStyles(styles)(Category);
