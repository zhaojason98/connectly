import HorizontalSpacer from '@/design-system/HorizontalSpacer';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faCircleInfo as InfoIcon} from '@fortawesome/free-solid-svg-icons';

type NodeProps = {
    name: string,
    children: JSX.Element,
    hint?: string,
}
const Item = styled('div')({
    width: '100%',
    padding: '0px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #D3D3D3',
    borderRadius: '4px',
    boxShadow: '4px 2px 2px #D3D3D3'
})

const LeftContainer = styled('div')({
    display: 'flex',
})
const Label = styled('p')({
    textTransform: 'capitalize',
});

export default function TemplateObject({
    name,
    children,
    hint
}: NodeProps){
    return(
        <Item
            draggable={true}
        >
            <LeftContainer>
                {children}
                <HorizontalSpacer size={2} />
                <Label>{name}</Label>
            </LeftContainer>
            <div>
                <Tooltip title={hint}>
                    <IconButton>
                        <FontAwesomeIcon icon={InfoIcon}/>
                    </IconButton>
                </Tooltip>
            </div>
        </Item>
    )
}