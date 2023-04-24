import { useContext, useState } from 'react';
import Card from '@/design-system/Card';
import VerticalSpacer from '@/design-system/VerticalSpacer';
import { styled } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faX as CloseIcon,
    faImage as HeaderIcon,
    faFileText as TextIcon,
    faSquare as ButtonIcon,
    faTrash as DeleteIcon,
} from '@fortawesome/free-solid-svg-icons';
import { CurrentNodeContext, ProjectContext } from '@/pages';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import HintCard from '@/design-system/HintCard';
import TextEditor from '@/design-system/TextEditor';
import TextField from '@mui/material/TextField';
import { MessageHeaderData } from '@/pages/types/nodes/message';
import { RowContainer } from '@/design-system/RowContainer';

const Container = styled('div')({
    height: '100%',
});

const HeaderContainer = styled(RowContainer)({
    justifyContent: 'space-between',
});

const MainHeader = styled('h2')({

});

const SubHeader = styled('h3')({

});

const Footer = styled('div')({

})


const Content = styled('div')({
    overflow: 'scroll',
    maxHeight: '80%',
})

const Dropdown = styled(Select)({
    width: '100%'
});

const SubTitle = styled('p')({
    color: 'rgba(0,0,0,0.54)',
})

const ButtonContainer = styled(RowContainer)({
    justifyContent: 'space-between',
});

const HEADER_TIPS:  MessageHeaderData = {
    'image': {
        subtitle: 'Image size recommendation: 800 x 418 pixel',
        hint: 'Images can enrich the message experience and help maintain engagement. Use eye-catching images that summarize the mesage (eg discounts, gifts, etc.)',
        link: 'localhost:3000',
    },
    'video': {
        subtitle: 'Max vidoe size',
        hint: 'Video hints',
        link: 'localhost:3000',
    },
    'document': {
        subtitle: 'Max document size',
        hint: 'Document hints',
        link: 'localhost:3000',
    }
}

const variableHelp = "Variables are dynamic content that help personalize your campaign, for example: customer names or coupon codes."

export default function MessageEditor() {
    const {nodes, onSave} = useContext(ProjectContext);
    const {currentNode, setCurrentNode} = useContext(CurrentNodeContext);
    const [data, setData] = useState(currentNode?.data);
    const [headerType, setHeaderType] = useState<keyof MessageHeaderData>(Object.keys(HEADER_TIPS)[0] as keyof MessageHeaderData);
    if (!data) {
        return null;
    }
    const handleHeaderTypeChange = (event: SelectChangeEvent<unknown>) => {
        setHeaderType(event.target.value as keyof MessageHeaderData);
    }

    const onBodyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({
            ...data,
            body: {
                ...data.body,
                value: e.target.value
            }
        })
    }

    const onFooterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            footer: {
              ...data.footer,
              value: e.target.value,  
            }
        })
    }

    const onClose = () => {
        setCurrentNode(null);
    }

    const onButtonChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, idx: number) => {
        let newButtons = data.buttons.value;
        newButtons[idx] = e.target.value;
        console.log(newButtons);
        setData({
            ...data,
            buttons: {
                ...data.buttons,
                value: newButtons,
            }
        })
    }

    const onSaveMessage = () => {
        // TODO: We can send an async request to upload the header image/video/document
        // Take the response of the uploaded as an URL and use it for this onSave function
        onSave({
            ...currentNode,
            data: data,

        })
    }

    const onToggle = (type: string, value: boolean) => {
        switch (type) {
            case 'header':
                setData({
                    ...data,
                    header: {
                        ...data.header,
                        isUsed: value,
                    }
                })
                return;
            case 'footer':
                setData({
                    ...data,
                    footer: {
                        ...data.footer,
                        isUsed: value,
                    }
                })
                return;
            case 'buttons': {
                setData({
                    ...data,
                    buttons: {
                        ...data.buttons,
                        isUsed: value,
                    }
                })
            }
        }
    }

    const bodyMessage = data.body.value;
    const footerMessage = data.footer.value;
    const buttonsList: string[] = data.buttons.value;

    return (
        <Container>
            <HeaderContainer>
                <MainHeader>Edit Message</MainHeader>
                <IconButton onClick={() => onClose()}>
                    <FontAwesomeIcon size="xs" icon={CloseIcon} />
                </IconButton>
            </HeaderContainer>
            <VerticalSpacer size={2} />
            <Content>
                <SubHeader>Content</SubHeader>
                <VerticalSpacer size={2} />
                <Card
                    icon={HeaderIcon}
                    type='header'
                    title='Header'
                    hint='Add a title or choose which type of media to use'
                    required={false}
                    isUsed={data.header.isUsed}
                    onToggle={onToggle}
                >
                    <div>
                        <Dropdown
                            value={headerType}
                            onChange={(e) => handleHeaderTypeChange(e)}
                        >
                            {Object.keys(HEADER_TIPS).map(option => (
                                <MenuItem key={option} value={option}>
                                    {option.charAt(0).toUpperCase() + option.slice(1)}
                                </MenuItem>
                            ))}
                        </Dropdown>
                        <VerticalSpacer size={2} />
                        <SubTitle>{HEADER_TIPS[headerType].subtitle}</SubTitle>
                        <VerticalSpacer size={2} />
                        <Button variant="outlined">{`UPLOAD ${headerType.toUpperCase()}`}</Button>
                        <VerticalSpacer size={2} />
                        <HintCard
                            title={`${headerType.charAt(0).toUpperCase() + headerType.slice(1)} header tips`}
                            hint={HEADER_TIPS[headerType].hint}
                            link={HEADER_TIPS[headerType].link}
                        />
                    </div>
                </Card>
                <VerticalSpacer size={4} />
                <Card
                    icon={TextIcon}
                    type='body'
                    title="Body message"
                    hint="Create body text"
                    required={true}
                    isUsed={data.body.isUsed}
                >
                    <div>
                        <TextEditor
                            value={bodyMessage}
                            onChange={onBodyChange}
                        />
                        <VerticalSpacer size={2} />
                        <HintCard
                            title='What are variables?'
                            hint={variableHelp}
                            link='localhost:3000'
                        />
                    </div>
                </Card>
                <VerticalSpacer size={4} />
                <Card
                    icon={TextIcon}
                    type='footer'
                    title="Footer message"
                    hint="Create footer"
                    required={false}
                    isUsed={data.footer.isUsed}
                    onToggle={onToggle}
                >
                    <TextField
                        label="Footer"
                        value={footerMessage}
                        onChange={onFooterChange}
                    />
                </Card>
                <VerticalSpacer size={4} />
                <Card
                    icon={ButtonIcon}
                    type='buttons'
                    title="Buttons"
                    hint="Add buttons"
                    required={false}
                    isUsed={data.buttons.isUsed}
                    onToggle={onToggle}
                >
                    <div>
                        {buttonsList.map((button: string, idx: number) => (
                            <div key={idx}>
                                <ButtonContainer>
                                    <h4>{`Button ${idx}`}</h4>
                                    <IconButton>
                                        <FontAwesomeIcon size="xs" icon={DeleteIcon}/>
                                    </IconButton>
                                </ButtonContainer>
                                <OutlinedInput
                                    fullWidth
                                    value={button}
                                    endAdornment={
                                        <InputAdornment position="end">{`${button.length}`}/25</InputAdornment>
                                    }
                                    inputProps={{
                                        maxLength: 25
                                    }}
                                    onChange={(e) => onButtonChange(e, idx)}
                                />
                                <VerticalSpacer size={1} />
                            </div>)
                        )}
                    </div>
                </Card>
            </Content>
            <VerticalSpacer size={4} />
            <Footer>
                <Button fullWidth variant='contained' onClick={() => onSaveMessage()}>
                    Save
                </Button>    
                <VerticalSpacer size={2} />
                <Button fullWidth variant='outlined'>
                    Delete
                </Button>   
            </Footer>
        </Container>
    )
}