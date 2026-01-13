"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { useReactFlow, type Node } from "@xyflow/react";
import { SelectNode } from "./select-node";
//import { createId } from "@/utils/create-id";

export function AddNodeButton() {
  const [open, setOpen] = useState(false);

  const { setNodes, screenToFlowPosition } = useReactFlow();

  function handleSelectNode(type: string) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const position = screenToFlowPosition({
      x: centerX + (Math.random() - 0.5) * 200,
      y: centerY + (Math.random() - 0.5) * 200,
    });

    const newNode: Node = {
      id: Math.random().toString(36).substr(2, 9),
      type : "TESTE",
      position,
      data: {},
    };

    setNodes((nodesAtuais) => [...nodesAtuais, newNode]);

    console.log("Novo node adicionado:", newNode);

    setOpen(false);
  }

  return (
    <>
      <Button size="icon" variant="outline" onClick={() => setOpen(true)}>
        <PlusIcon />
      </Button>

      <SelectNode
        open={open}
        onOpenChange={setOpen}
        onSelect={handleSelectNode}
      />
    </>
  );
}
