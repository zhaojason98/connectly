import { NodeProp } from "./node"

export type ProjectContent = {
    nodes: {
        [key: string]: NodeProp
    },
    onSave: (newNode: any) => void,
}

export type CurrentNodeContent = {
    currentNode: NodeProp | null,
    setCurrentNode: (node: NodeProp | null) => void,
}