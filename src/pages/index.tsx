import {createContext, useState} from 'react';
import Box from '@mui/material/Box';
import stockImage from '../../public/mock_header.jpeg';

import Canvas from './components/canvas'
import Header from './components/navigation/Header'
import NavBar from './components/navigation/NavBar'
import SideBar from './components/navigation/SideBar'
import { CurrentNodeContent, ProjectContent } from './types/nodes/context';
import { NodeProp } from './types/nodes/node';

// Ideally we can fetch a serialized list of nodes to render in the following
// JSON. We can then deserialize and render it respectfully

const blocks = {
      2: {
          nodeId: 2,
          type: 'message',
          data: {
            header: {
              isUsed: true,
              value: `url(/mock_header.jpeg)`,
            },
            body: {
              isUsed: true,
              value: 'We have an exciting offer. Are you interested in hearing more?'
            },
            footer: {
              isUsed: true,
              value: `Reply 'STOP' to opt out`
            },
            buttons: {
              isUsed: true,
              value: ['Talk to an styling expert', 'Sure!', 'Maybe next time']
            }
          },
          position: {
              top: 150,
              left: 700,
          },
          connection: null,
      }
}
export const ProjectContext = createContext<ProjectContent>({
  nodes: blocks,
  onSave: () => {}
});
export const CurrentNodeContext = createContext<CurrentNodeContent>({
  currentNode: null,
  setCurrentNode: () => {}
});

export default function Home() {
  const [nodes, updateNodes] = useState(blocks);
  const [currentNode, setCurrentNode] = useState<NodeProp | null>(null);

  const onSave = (newNode: any) => {
    // This should be a network request instead of a state
    // The nodes should be directly read from a database
    updateNodes({
      ...nodes,
      [newNode.nodeId]: newNode,
    })
  }

  return (
    <ProjectContext.Provider value={{
      nodes,
      onSave,
    }}>
      <CurrentNodeContext.Provider value={{
        currentNode,
        setCurrentNode
      }}
      >
        <Box className="app">
          <NavBar />
          <Box className="main">
            <Header />
            <Box className="page">
              <SideBar />
              <Canvas />
            </Box>
          </Box>
        </Box>
      </CurrentNodeContext.Provider>
    </ProjectContext.Provider>
  )
}
