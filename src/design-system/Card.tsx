import { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Switch from '@mui/material/Switch';
import Chip from '@mui/material/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import HorizontalSpacer from './HorizontalSpacer';
import VerticalSpacer from './VerticalSpacer';
import {faCircleInfo as InfoIcon} from '@fortawesome/free-solid-svg-icons';
import { RowContainer } from './RowContainer';
type CardProps = {
    icon: IconProp;
    title: string;
    type: string;
    required: boolean;
    hint?: string;
    isUsed: boolean;
    children: string | JSX.Element;
    onToggle?: (type: string, value: boolean) => void;
}
const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    border: '1px solid #D3D3D3',
    borderRadius: '8px',
});

const CardHeader = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
});

export default function Card({
    icon,
    title,
    type,
    required,
    hint,
    isUsed,
    children,
    onToggle,
}: CardProps) {
    const [show, setShow] = useState(isUsed);

    useEffect(() => {
        !!onToggle && onToggle(type, show);
    }, [show]);
    
    const showRequired = () => {
        if (required) {
            return (
                <Chip label="REQUIRED" />
            )
        }
        return (
            <Switch
                checked={show}
                onChange={() => {
                    setShow(!show);
                }}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        )
    }
    return (
        <Container>
            <CardHeader>
                <RowContainer>
                    <FontAwesomeIcon size="lg" icon={icon} color="#666" />
                    <HorizontalSpacer size={2} />
                    <h4>{title}</h4>
                    {!!hint && (
                    <RowContainer>
                        <HorizontalSpacer size={1} />
                        <Tooltip title={hint}>
                            <IconButton>
                                <FontAwesomeIcon size="2xs" icon={InfoIcon}/>
                            </IconButton>
                        </Tooltip>
                    </RowContainer>
                )}
                </RowContainer>
                <div>
                    {showRequired()}
                </div>
            </CardHeader>
            <VerticalSpacer size={2} />
            {show && (children)}
        </Container>
    )
}