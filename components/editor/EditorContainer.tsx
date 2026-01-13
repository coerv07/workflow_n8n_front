"use client";

import Editor from "./Editor";
import { useNodesByWorkflow } from "@/app/api/nodes/hooks/findById.hooks";
import type { Node } from "@xyflow/react";

interface Props {
  workflowId: string;
}

export default function   EditorContainer({ workflowId }: Props) {
  const { data, isLoading } = useNodesByWorkflow(workflowId);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-gray-500">Carregando nodes...</span>
      </div>
    );
  }

  const nodes: Node[] = data ?? [];

  return <Editor nodes={nodes} />;
}
