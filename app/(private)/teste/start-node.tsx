import { Handle, NodeProps, Position } from "@xyflow/react";
import { Play, Square } from "lucide-react";
import React from "react";

export default function StartNode() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-2 px-4 border">
      <div className="flex gap-2 items-center">
        <Play className="p-2 rounded-lg h-8 w-8 bg-yellow-100 dark:bg-yellow-500" />
        <h2>Start</h2>
        <Handle
          type="source"
          position={Position.Right}
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#2A2A2A",
            borderRadius: "50%",
            border: "2.5px solid white",
            boxShadow: "0 0 6px rgba(0,0,0,0.2)",
            transition: "transform 0.15s ease-in-out",
          }}
        />
      </div>
    </div>
  );
}

export function ActionNode() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-2 px-4 border">
      <div className="flex gap-2 items-center">
        <Square className="p-2 rounded-lg h-8 w-8 bg-blue-100 dark:bg-blue-500" />
        <h2 className="font-medium">RYAN</h2>

        <Handle
          type="target"
          position={Position.Left}
          style={{
            width: 10,
            height: 10,
            backgroundColor: "#2A2A2A",
            borderRadius: "50%",
            border: "2.5px solid white",
          }}
        />

        <Handle
          type="source"
          position={Position.Right}
          style={{
            width: 10,
            height: 10,
            backgroundColor: "#2A2A2A",
            borderRadius: "50%",
            border: "2.5px solid white",
          }}
        />
      </div>
    </div>
  );
}
