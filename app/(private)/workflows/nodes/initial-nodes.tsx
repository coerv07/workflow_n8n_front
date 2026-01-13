"use client";
import { NodeProps, Handle, Position } from "@xyflow/react";
import { memo } from "react";
import { PlusIcon } from "lucide-react";

export const InitialNode = memo((props: NodeProps) => {
  return (
    <div className="rounded-md border bg-white px-3 py-2 shadow">
      <div className="flex items-center justify-center">
        <PlusIcon className="size-4" />
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
});

InitialNode.displayName = "InitialNode";
