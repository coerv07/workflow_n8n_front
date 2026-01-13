"use client";

import { useState } from "react";
import { CreateWorkflows } from "@/app/api/workflows/hooks/create.hook";
import { FindAllWorkflows } from "@/app/api/workflows/hooks/findAll.hooks";
import { Button } from "@/components/ui/button";
import { ItemList } from "./components/pagination";

export default function Page() {
  const [name, setName] = useState("");

  const { mutate: createWorkflow, isPending } = CreateWorkflows();
  const { data, isLoading, isError, error } = FindAllWorkflows();

  const workflows = data?.data ?? [];
  return (
    <div style={{ padding: 20 }}>
      <Button onClick={() => createWorkflow()} >
        Criar workflow
      </Button>
      <div className="mt-6">{!isLoading && workflows.length > 0 && <ItemList items={workflows} />}</div>
    </div>
  );
}
