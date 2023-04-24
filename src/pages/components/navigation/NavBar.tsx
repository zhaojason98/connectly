
import { Divider } from '@mui/material';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faComment as CommentIcon,
    faGear as GearIcon,
    faBullhorn as BullhornIcon,
    faCubes as CubeIcon,
} from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/system';
import VerticalSpacer from '@/design-system/VerticalSpacer';

const NavBarContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '40px',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    position: 'relative',
    height: '100%',
    flexGrow: 1,
    flexShrink: 1,
});

const Header = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

const NavButton = styled(IconButton)({
    margin: '8px 0px',
})

const imgSrc = "https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F709713158-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FTPnSja6RkBiRLGAbuXVJ%252Ficon%252FNU8dqTbfQ9y0LQncwaIe%252FConnectly%2520logo%2520mark_white%2520on%2520black.png%3Falt%3Dmedia%26token%3D02e595eb-c399-4a00-a8a0-070dde5c4287";

export default function NavBar() {
    return (
        <NavBarContainer>
            <Header>
                    <VerticalSpacer size={2} />
                    <img src={imgSrc} width="40" height="40" />
                    <VerticalSpacer size={2} />
                <Divider color="white" />
                <NavButton>
                    <FontAwesomeIcon icon={CubeIcon} color="white"/>
                </NavButton>
                <Divider color="white" />
                <NavButton>
                    <FontAwesomeIcon icon={CommentIcon} color="white"/>
                </NavButton>
                <Divider color="white" />
                <NavButton>
                    <FontAwesomeIcon icon={BullhornIcon} color="white"/>
                </NavButton>
            </Header>
            <div className="navbar--footer">
                <NavButton>
                    <FontAwesomeIcon icon={GearIcon} color="white"/> 
                </NavButton>
            </div>
        </NavBarContainer>
    )
}