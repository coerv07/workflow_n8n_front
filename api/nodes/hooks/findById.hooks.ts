import { useQuery } from "@tanstack/react-query";
import { getNodeByWorkflow, type Node } from "../nodes.client";

export type ReactFlowNode = {
  id: string;
  position: { x: number; y: number };
  data: { label: string };
};

export function useNodesByWorkflow(workflowId: string) {
  return useQuery<ReactFlowNode[]>({
    queryKey: ["nodes", workflowId],
    queryFn: async () => {
      console.log("Fetching nodes for workflowId:", workflowId);
      const nodes = await getNodeByWorkflow(workflowId);

      // mapeia apenas os campos que o React Flow precisa
      return nodes.map((n: Node) => ({
        id: n.id,
        position: n.position,
        data: { label: (n.data.label as string) ?? n.name },
      }));
    },
    // staleTime: 30 * 1000,
    // refetchOnWindowFocus: false, // desativa re-fetch ao focar a janela
    // refetchOnMount: false, // desativa re-fetch ao montar se cache ainda válido
    // enabled: !!workflowId,
  });
}
