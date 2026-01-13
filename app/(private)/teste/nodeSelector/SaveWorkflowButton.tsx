"use client";

import { Button } from "@/components/ui/button";
import { useReactFlow } from "@xyflow/react";

export function SaveWorkflowButton() {
  const { getNodes, getEdges } = useReactFlow();

  function handleSave() {
    const nodes = getNodes();
    const edges = getEdges();

    console.log("💾 Workflow atual:", {
      nodes,
      edges,
    });

    // futuramente:
    // await saveWorkflow({ nodes, edges });
  }

  return (
    <Button variant="outline" onClick={handleSave}>
      Salvar
    </Button>
  );
}
export default SaveWorkflowButton;