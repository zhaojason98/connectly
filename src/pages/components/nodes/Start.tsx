import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane as StartIcon} from '@fortawesome/free-solid-svg-icons';
import VerticalSpacer from '@/design-system/VerticalSpacer';

type StartProps = {
    position: {
        top: number,
        left: number,
    }
}
const Container = styled('div')({
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '32px',
    borderRadius: '50%',
    position: 'absolute',
    border: '1px solid black',
})
export default function Start({
    position
}: StartProps) {
    return(
        <Container style={position}>
            <FontAwesomeIcon icon={StartIcon} />
            <VerticalSpacer size={2} />
            <p>Campaign Starts</p>
        </Container>
    )
}