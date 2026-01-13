"use client";

import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  type Node,
} from "@xyflow/react";
import { useMemo } from "react";
import { NodeComponents } from "@/app/(private)/workflows/nodes/config";

interface EditorProps {
  nodes?: Node[];
}

export default function Editor({ nodes }: EditorProps) {
  const defaultNodes: Node[] = useMemo(
    () => [
      {
        id: "initial",
        type: "INITIAL",
        position: { x: 100, y: 100 },
        data: {},
      },
    ],
    []
  );

  return (
    <ReactFlowProvider>
      <div className="w-full h-full">
        <ReactFlow
          nodes={nodes ?? defaultNodes}
          nodeTypes={NodeComponents}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
