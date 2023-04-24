import {createContext, useState} from 'react';
import Box from '@mui/material/Box';
import stockImage from '../../public/mock_header.jpeg';

import Canvas from './components/canvas'
import Header from './components/navigation/Header'
import NavBar from './components/navigation/NavBar'
import SideBar from './components/navigation/SideBar'

// Ideally we can fetch a serialized list of nodes to render in the following
// JSON. We can then deserialize and render it respectfully

const blocks = {
      2: {
          nodeId: 2,
          type: 'message',
          data: {
            header: {
              required: false,
              isUsed: true,
              value: `url(/mock_header.jpeg)`,
            },
            body: {
              required: true,
              isUsed: true,
              value: 'We have an exciting offer. Are you interested in hearing more?'
            },
            footer: {
              required: false,
              isUsed: true,
              value: `Reply 'STOP' to opt out`
            },
            buttons: {
              required: false,
              isUsed: true,
              value: ['Talk to an styling expert', 'Sure!', 'Maybe next time']
            }
          },
          position: {
              top: 300,
              left: 700,
          },
          connection: null,
      }
}
export const ProjectContext = createContext(blocks);
export const CurrentNodeContext = createContext(null);

export default function Home() {
  const [nodes, updateNodes] = useState(blocks);
  const [currentNode, setCurrentNode] = useState(null);
  const headerName = <h1>
    Create WhatsApp campaign
  </h1>

  const onSave = (newNode: any) => {
    console.log(newNode)
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
