import {useContext} from 'react';
import { ProjectContext } from '@/pages';
import Start from '@/pages/components/nodes/Start';
import { styled } from '@mui/system';
import Message from '../nodes/Message';

type NodeLayoutProps = {
    zoom: number
}

const Layout = styled('div')({
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
});
export default function NodeLayout({
    zoom
}: NodeLayoutProps) {
    const {nodes, _} = useContext(ProjectContext);
    const getNode = (node: any, idx: number) => {
        switch(node.type) {
            case 'welcome':
                return <Start position={node.position} key={idx} />
            case 'message':
                return <Message
                    key={idx}
                    node={node}
                />
        }
    }
    return (
        <Layout style={{zoom: zoom}}>
            {Object.values(nodes).map((node, idx) => getNode(node, idx))}
        </Layout>
    )
}