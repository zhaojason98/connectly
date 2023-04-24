import { useState } from 'react';
import { styled } from '@mui/system';
import NodeLayout from './NodeLayout';

type CanvasProps = {
    
}

const Container = styled('div')({
    position: 'absolute',
    overflow: 'hidden',
    height: 'calc(100% - 72px)'
});

const CanvasLayout = styled('canvas')({
    width: '100vw',
    height: '100vh',
    backgroundImage: 'radial-gradient(circle, #D0D0D0 1px, #FBFCFF 1px)',
    backgroundSize: '40px 40px',
});

// Preset the zoom to enforce upper and lower bounds
const zoom = [0.25, 0.5, 0.8, 1, 1.25, 1.5, 2];

export default function Canvas() {
    const [currZoom, setZoom] = useState(3);

    const onZoomInc = () => {
        setZoom((prevZoom) => {
            if (prevZoom == 6) {
                return prevZoom;
            }
            return prevZoom + 1;
        })
    }

    const onZoomDec = () => {
        setZoom((prevZoom) => {
            if (prevZoom == 0) {
                return prevZoom;
            }
            return prevZoom - 1;
        })
    }
    return (
        <Container style={{zoom: zoom[currZoom]}}>
            <CanvasLayout />
            <NodeLayout zoom={zoom[currZoom]} />
        </Container>
    )
}