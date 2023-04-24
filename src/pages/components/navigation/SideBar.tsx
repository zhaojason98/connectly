import { useContext} from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Campaign from "../menu/Campaign";
import { CurrentNodeContext } from '@/pages';
import MessageEditor from '../menu/MessageEditor';

const SideBarContainer = styled(Box)({
    backgroundColor: 'white',
    padding: '16px',
    height: '100%',
    position: 'relative',
    width: '30%',
    minWidth: '200px',
    maxWidth: '400px',
    zIndex: 5,
    boxShadow: '0px 0px 4px #D3D3D3',
});

export default function SideBar() {
    const {currentNode} = useContext(CurrentNodeContext);

    const getSideBar = () => {
        if (currentNode) {
            const type = currentNode.type;
            switch(type) {
                case 'message':
                    return <MessageEditor />
                default:
                    return <Campaign />
            }
        }
        return <Campaign />
    }
    return(
        <SideBarContainer>
            {getSideBar()}
        </SideBarContainer>
    )
}