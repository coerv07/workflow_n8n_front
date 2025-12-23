import { Loader2 } from "lucide-react";

interface LoadingViewProps {
  message?: string;
}

export const LoadingView = ({ message }: LoadingViewProps) => {
  return (
    <div className="flex flex-1 h-full flex-col items-center justify-center gap-y-4">
      <Loader2 className="size-6 animate-spin text-primary" />
      {!!message && (
        <p className="text-sm text-muted-foreground">{message}</p>
      )}
    </div>
  );
};
