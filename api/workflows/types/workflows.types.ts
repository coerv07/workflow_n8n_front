export interface GetWorkflowsParams {
  page?: number;
  limit?: number;
}

export interface GetWorkflowsResponse<T> {
  success: boolean;
  page: number;
  limit: number;
  data: T[];
}


export interface CreateWorkflow {
  id: string;
  name: string;
}
