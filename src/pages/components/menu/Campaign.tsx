import { useState } from 'react';
import { styled } from '@mui/system';
import NumberSteps from '@/design-system/NumberSteps';
import VerticalSpacer from '@/design-system/VerticalSpacer';
import Build from './Build';

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
})

export const Title = styled('h2')({

});

export default function Campaign() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handlePrev = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const renderCampaign = () => {
        switch(activeStep) {
            case 0: 
                return <Build />
            default:
                return <div />
        }
    }

    return (
        <Container>
            <NumberSteps numSteps={4} activeStep={activeStep} />
            <VerticalSpacer size={2} />
            {renderCampaign()}
        </Container>
    )
}