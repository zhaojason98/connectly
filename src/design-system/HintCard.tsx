import { useState } from 'react';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faX as CloseIcon,
    faLightbulb as IdeaIcon
} from '@fortawesome/free-solid-svg-icons';
import HorizontalSpacer from './HorizontalSpacer';
import VerticalSpacer from './VerticalSpacer';
import { RowContainer } from './RowContainer';

const Container = styled('div')({
    backgroundColor: '#F5F5F5',
    padding: '16px',
    borderRadius: '8px',
});

const Title = styled('h3')({

})

const Hint = styled('p')({
    color: 'rgba(0,0,0,0.8)'
});

const Link = styled('a')({
    color: '#1085FF'
});

const Header = styled(RowContainer)({
    justifyContent: 'space-between',
});

type HintCardProps = {
    title: string,
    hint: string,
    link?: string,
};

export default function HintCard({
    title,
    hint,
    link,
}: HintCardProps) {
    const [showHint, setShowHint] = useState(true);

    const hideHint = () => {
        setShowHint(false);
    }
    if (!showHint) {
        return null;
    }

    return (
        <Container>
            <Header>
                <RowContainer>
                    <FontAwesomeIcon size="sm" icon={IdeaIcon} />
                    <HorizontalSpacer size={2} />
                    <Title>{title}</Title>
                </RowContainer>
                <IconButton onClick={() => hideHint()}>
                    <FontAwesomeIcon size="xs" icon={CloseIcon} />
                </IconButton>
            </Header>
            <VerticalSpacer size={2} />
            <Hint>
                {hint}
            </Hint>
            <VerticalSpacer size={2} />
            <Link href={link}>Learn More</Link>
        </Container>
    )
}