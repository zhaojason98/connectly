import Button from '@mui/material/Button';
import React from 'react';
import { styled } from '@mui/system';
import OutlinedInput from '@mui/material/OutlinedInput';
import HorizontalSpacer from './HorizontalSpacer';
import InputAdornment from '@mui/material/InputAdornment';
import { RowContainer } from './RowContainer';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFaceLaugh as EmojiIcon,
    faBold as BoldIcon,
    faTextSlash as SlashIcon,
    faItalic as ItalicIcon,
    faCode as CodeIcon,
} from '@fortawesome/free-solid-svg-icons';

type TextEditorProps = {
    value: string;
    onChange: (e: any) => void;
}

const ButtonContainer = styled(RowContainer)({
    justifyContent: 'space-between',
})

const Editor = styled(OutlinedInput)({
    height: '240px',
    display: 'flex',
    alignItems: 'start',
});

const Adornment = styled(InputAdornment)({
    position: 'absolute',
    bottom: '16px',
    right: '16px',
})
export default function TextEditor({
    value,
    onChange,
}: TextEditorProps) {
    return (
        <div>
            <Editor
                fullWidth
                multiline
                value={value}
                onChange={onChange}
                endAdornment={
                    <Adornment position="end">{`${value.length}`}/1024</Adornment>
                }
                inputProps={{
                    maxLength: 1024
                }}
            />
            <ButtonContainer>
                <Button variant="text">ADD VARIABLE</Button>
                <RowContainer>
                    <IconButton>
                        <FontAwesomeIcon size="xs" icon={EmojiIcon}/>
                    </IconButton>
                    <HorizontalSpacer size={1} />
                    <IconButton>
                        <FontAwesomeIcon size="xs" icon={BoldIcon}/>
                    </IconButton>
                    <HorizontalSpacer size={1} />
                    <IconButton>
                        <FontAwesomeIcon size="xs" icon={SlashIcon}/>
                    </IconButton>
                    <HorizontalSpacer size={1} />
                    <IconButton>
                        <FontAwesomeIcon size="xs" icon={ItalicIcon}/>
                    </IconButton>
                    <HorizontalSpacer size={1} />
                    <IconButton>
                        <FontAwesomeIcon size="xs" icon={CodeIcon}/>
                    </IconButton>
                </RowContainer>
            </ButtonContainer>
        </div>
    )
}