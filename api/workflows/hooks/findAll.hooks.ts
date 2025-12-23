// src/hooks/workflows/useWorkflows.ts
import { useQuery } from "@tanstack/react-query";
import { GetWorkflowsParams } from "../types/workflows.types";
import { getWorkflows } from "../workflow.client";

export const FindAllWorkflows = (params?: GetWorkflowsParams) => {
  return useQuery({
    queryKey: ["workflows", params],
    queryFn: () => getWorkflows(params ?? {}),
    staleTime: 30 * 1000,
    refetchOnMount: false, // não refaz requisição ao montar
    refetchOnWindowFocus: false, // não refaz quando foco na aba
  });
};
