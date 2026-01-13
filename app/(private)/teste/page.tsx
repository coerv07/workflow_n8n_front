"use client";

import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  Panel,
  type Node,
  type Edge,
  type ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import StartNode, { ActionNode } from "./start-node";
import { useNodesByWorkflow } from "@/app/api/nodes/hooks/findById.hooks";
import { AddNodeButton } from "./nodeSelector/add-node-button";
import SaveWorkflowButton from "./nodeSelector/SaveWorkflowButton";

/* 👇 tipo REAL do node do seu fluxo */
export type FlowNode = Node<{
  label: string;
}>;

/* 👇 tipos de node (componentes) */
const nodeTypes = {
  INITIAL: StartNode,
  TESTE: ActionNode,
};

export default function Editor() {
  // /* 👇 onInit corretamente tipado */
  // const onInit = (instance: ReactFlowInstance<FlowNode, Edge>) => {
  //   console.log("🧩 nodes (onInit):", instance.getNodes());
  //   console.log("🔗 edges (onInit):", instance.getEdges());
  //   //console.log("🟣 ReactFlow instance:", instance);
  // };

  const { data: DbNodes, isLoading, isError, error } = useNodesByWorkflow("cmjhda8820000hcgb5m6gdyie");

  if (isLoading) {
    return <div>Carregando workflow...</div>;
  }

  if (isError) {
    console.error(error);
    return <div>Erro ao carregar workflow</div>;
  }

  return (
    <ReactFlowProvider>
      <div className="w-full h-full">
        <ReactFlow<FlowNode, Edge>
          defaultNodes={DbNodes ?? []}
          nodeTypes={nodeTypes}
          fitView
          /*onInit={onInit} */
        >
          <Background />
          <Controls />
          <MiniMap />
          <Panel position="top-right">
            <AddNodeButton />
            <SaveWorkflowButton />
          </Panel>
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
