import React from 'react';
import { makeStyles } from '@material-ui/core/styles/index';
import Stepper from '@material-ui/core/Stepper/index';
import Step from '@material-ui/core/Step/index';
import StepLabel from '@material-ui/core/StepLabel/index';
import Button from '@material-ui/core/Button/index';
import Typography from '@material-ui/core/Typography/index';

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Short Distance Trips', 'Long Distance Trips', 'Confirm Information'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Uknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function handleNext() {
        window.location.href = '#/transportlong';
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        sessionStorage.setItem('LongDistance', 'Step2');

        console.log(sessionStorage.getItem('LongDistance'));
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        sessionStorage.setItem('LongDistance', 'Step1');
        console.log(sessionStorage.getItem('LongDistance'));
    }

    function handleReset() {
        setActiveStep(0);
        sessionStorage.setItem('LongDistance', 'Step1');
        console.log(sessionStorage.getItem('LongDistance'));
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        {/*
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        */}
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}