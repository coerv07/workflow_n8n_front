import { ReactNode } from "react";
import { LoadingView } from "./loading-view";
import { ErrorView } from "./error-view";

interface AsyncStateProps {
  isLoading: boolean;
  isError: boolean;
  error?: unknown;
  loadingMessage?: string;
  children: ReactNode;
}

export const AsyncState = ({
  isLoading,
  isError,
  error,
  loadingMessage,
  children,
}: AsyncStateProps) => {
  if (isLoading) {
    return <LoadingView message={loadingMessage} />;
  }

  if (isError) {
    return (
      <ErrorView
        message={error instanceof Error ? error.message : "Erro inesperado"}
      />
    );
  }

  return <>{children}</>;
};
