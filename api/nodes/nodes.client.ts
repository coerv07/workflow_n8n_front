import api from "../client";

export type Node = {
  id: string;
  workflowId: string;
  name: string;
  type: string;
  position: { x: number; y: number };
  data: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

export async function getNodeByWorkflow(workflowid: string): Promise<Node[]> {
  const { data } = await api.get(`nodes/workflow?workflowId=${workflowid}`);
  return data.data;
}
