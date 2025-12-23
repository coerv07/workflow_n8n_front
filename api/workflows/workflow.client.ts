import { generateSlug } from "random-word-slugs";
import api from "../client";
import { CreateWorkflow, GetWorkflowsParams, GetWorkflowsResponse } from "./types/workflows.types";

export const getWorkflows = async (params?: GetWorkflowsParams): Promise<GetWorkflowsResponse<CreateWorkflow>> => {
  const query = new URLSearchParams();
  if (params?.page) query.append("page", params.page.toString());
  if (params?.limit) query.append("limit", params.limit.toString());
  //if (params?.name) query.append("name", params.name);

  const { data } = await api.get<GetWorkflowsResponse<CreateWorkflow>>(`/workflows/findall?${query.toString()}`);

  return data;
};

export const createWorkflow = async (workflow?: { name?: string }): Promise<CreateWorkflow> => {
  const { data } = await api.post<CreateWorkflow>("/workflows", {
    name:
      workflow?.name ??
      generateSlug(2, {
        format: "title",
      }),
  });

  return data;
};
