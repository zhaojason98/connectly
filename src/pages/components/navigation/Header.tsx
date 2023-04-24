import { IconButton, Button, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmark as CloseIcon,
    faLightbulb as TipIcon,
} from '@fortawesome/free-solid-svg-icons';
import HorizontalSpacer from '@/design-system/HorizontalSpacer';
import { styled } from '@mui/system';

const HeaderContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '72px',
    backgroundColor: 'white',
    boxShadow: '0px 4px 4px #D3D3D3',
    padding: '0px 16px',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    zIndex: 100,
});

const Title = styled('h2')({
    textOverflow: 'ellipsis',
    maxWidth: '50%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
});

const TipsButton = styled(Button)({
    backgroundColor: '#F5F5F5',
    color: '#1085FF',
    borderRadius: '24px',
    padding: '8px 16px',
});

export default function Header() {
    return (
        <HeaderContainer>
            <Title>WhatsApp App</Title>
            <Box sx={{display: 'flex'}}>
                <TipsButton startIcon={<FontAwesomeIcon icon={TipIcon} />}>
                    Tips
                </TipsButton>
                <HorizontalSpacer size={2} />
                <IconButton>
                    <FontAwesomeIcon icon={CloseIcon} />
                </IconButton>
            </Box>
        </HeaderContainer>
    )
}