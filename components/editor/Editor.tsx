// components/editor/Editor.tsx
"use client";

import { ReactFlow, Background, Controls, MiniMap, type Node, type Edge, type NodeChange, type EdgeChange } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

interface EditorProps {
  nodes: Node[];
  edges?: Edge[];
  onNodesChange?: (changes: NodeChange[]) => void;
  onEdgesChange?: (changes: EdgeChange[]) => void;
}

export default function Editor({ nodes, edges, onNodesChange, onEdgesChange }: EditorProps) {
  return (
    <div className="w-full h-full">
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} fitView>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
