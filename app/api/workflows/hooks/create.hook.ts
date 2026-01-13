import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createWorkflow } from "../workflow.client";

export const CreateWorkflows = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => createWorkflow(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workflows"] });
    },
  });
};
