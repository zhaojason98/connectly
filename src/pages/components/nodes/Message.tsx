import {useContext} from 'react';
import { styled } from '@mui/system';

import { Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane as StartIcon} from '@fortawesome/free-solid-svg-icons';
import VerticalSpacer from '@/design-system/VerticalSpacer';
import {faMessage as MessageIcon } from '@fortawesome/free-solid-svg-icons';
import HorizontalSpacer from '@/design-system/HorizontalSpacer';
import { CurrentNodeContext } from '@/pages';
import { NodeProp } from '@/pages/types/nodes/node';

type MessageProps = {
    node: NodeProp
}
const Container = styled('div')({
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: 'white',
    boxShadow: '4px 4px 4px #D3D3D3',
    borderRadius: '4px',
    width: '400px',
})

const Header = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    height: '24px',
    alignItems: 'center',
})

const Name = styled('h3')({

});

const Body = styled('div')({
    minHeight: '80px',
    minWidth: '240px',
    padding: '8px',
});

const ChatContainer = styled('div')({
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
})

const BodyContainer = styled('div')({
    backgroundColor: '#F5F5F5',
    padding: '16px',
    borderRadius: '8px',
});

const HeaderPreview = styled('div')({

});

const TextPreview = styled('p')({
    textOverflow: 'ellipsis',
    width: '100%',
    overflow: 'hidden',
})
const Label = styled('p')({
    color: '#41C352',
    padding: '8px',
    backgroundColor: '#F5F5F5',
    width: 'fit-content',
    margin: '8px 0px',
    borderRadius: '8px',
})

const FooterLabel = styled(TextPreview)({
    color: 'rgba(0,0,0,0.54)'
})

const MessageLogo = styled('div')({
    display: 'flex',
    padding: '12px',
    borderRadius: '50%',
    backgroundColor: '#7986CB',
})

const Button = styled('div')({
    display: 'flex',
    alignItems: 'center',
    color: '#1976d2',
    justifyContent: 'center',
    margin: '8px 0px',
    backgroundColor: 'white',
    padding: '16px 0px',
    minWidth: '240px',
    borderRadius: '8px',
})

const ButtonLabel = styled('span')({
    color: '#007DFF',
})

export default function Message({
    node
}: MessageProps) {
    const {
        data,
        position,
    } = node;
    const {
        header,
        body,
        footer,
        buttons
    } = data;

    const {currentNode, setCurrentNode} = useContext(CurrentNodeContext);

    const headerValue = header.isUsed ? header.value : null;
    const bodyValue = body.value;
    const footerValue = footer.isUsed ? footer.value : null;
    const buttonsValue = buttons.isUsed ? buttons.value : [];

    return(
        <Container
            style={position}
            onClick={() => setCurrentNode(node)}
            onBlur={() => setCurrentNode(null)}
        >
            <Header>
                <MessageLogo>
                    <FontAwesomeIcon icon={MessageIcon} color="white" />
                </MessageLogo>
                <HorizontalSpacer size={1} />
                <Name>Message Example</Name>
            </Header>
            <VerticalSpacer size={2} />
            <BodyContainer>
                <ChatContainer>
                    <Body style={{backgroundImage: headerValue ?? 'none'}}>
                        <HeaderPreview>
                            <Label
                                style={{backgroundColor: !!headerValue ? 'white' : '#F5F5F5'}}
                            >Header</Label>
                        </HeaderPreview>
                    </Body>
                    <VerticalSpacer size={2} />
                    <Divider sx={{
                        borderStyle:'dashed',
                        borderColor: '#41C352'
                    }}/>
                    <Body>
                        <Label>Body message</Label>
                        <TextPreview>{bodyValue ?? ''}</TextPreview>
                    </Body>
                    <Divider sx={{
                        borderStyle:'dashed',
                        borderColor: '#41C352'
                    }}/>
                    <Body>
                        <Label>Footer</Label>
                        <FooterLabel>{footerValue ?? ''}</FooterLabel>
                    </Body>
                </ChatContainer>
                {(buttonsValue.map((button :string, idx: number)=> (
                    <Button key={idx}>
                        <ButtonLabel>{button}</ButtonLabel>
                    </Button>
                )))}
            </BodyContainer>
        </Container>
    )
}