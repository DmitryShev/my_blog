import React, { Component } from 'react';
import { objectOf, string } from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const testData = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'hello',
    imgPath:
      'https://ei.marketwatch.com/Multimedia/2018/05/17/Photos/ZH/MW-GJ358_earthq_20180517080038_ZH.jpg?uuid=ea4e2e54-59c9-11e8-b8ec-ac162d7bc1f7'
  }
];

const styles = {
  container: {
    height: '50%'
  },
  imgContainer: {
  },
  img: {
    /* maxWidth: '400px',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    margin: '0 auto' */

    width: '100%',
    display: 'block',
    minHeight: '100%',
    height: '350px',
    verticalAlign: 'middle',
  }
};

class Stepper extends Component {
  static propTypes = {
    classes: objectOf(string).isRequired
  }

  state = {
    activeStep: 0
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  }

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  }

  handleStepChange = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const maxSteps = testData.length;

    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
          interval={8000}
          className={classes.imgContainer}
        >
          {testData.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

export const Carusel = withStyles(styles)(Stepper);
