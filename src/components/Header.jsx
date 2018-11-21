import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';


export class Header extends Component {
  state = {
    nextSlide: false
  }

  onChangeSlide = () => (
    this.setState({ nextSlide: !this.state.nextSlide })
  )

  render() {
    return (
      <div>
        <Typography variant="h2" color="inherit">
          Activello
        </Typography>
        <Typography variant="h4" color="inherit">
          minimal worldpress theme for bloggers
        </Typography>

      </div>
    );
  }
}
