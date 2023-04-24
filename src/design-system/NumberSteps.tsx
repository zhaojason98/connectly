import { styled } from '@mui/system';

type StepperProps = {
    numSteps: number,
    activeStep: number,
}

const Step = styled('div')({
  borderRadius: '50%',
  width: '24px',
  height: '24px',
  padding: '5px',
  textAlign: 'center',
  margin: '0px 4px',
  fontSize: '12px',
});

const Connector = styled('span')({
  borderColor: '#bdbdbd',
  borderTop: '1px solid',
  width: '16px',
})

const StepContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
})
const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const defaultColor = {
  background: '#666',
  color: 'white',
};

const activeColor = {
  background: '#1976d2',
  color: 'white',
}

export default function NumberSteps({
    numSteps,
    activeStep,
}: StepperProps) {
  return (
    <Container>
        {[...Array(numSteps)].map((_, idx) => (
          <StepContainer key={idx}>
            <Step
              style={activeStep==idx ? activeColor : defaultColor}
            >
              {idx + 1}
            </Step>
            {idx !== numSteps -1 && (<Connector />)}
          </StepContainer>
        ))}
    </Container>
  );
}