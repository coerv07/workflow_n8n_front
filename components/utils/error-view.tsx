import { AlertTriangleIcon } from "lucide-react";

interface ErrorViewProps {
  message?: string;
}

export const ErrorView = ({ message }: ErrorViewProps) => {
  return (
    <div className="flex flex-1 h-full flex-col items-center justify-center gap-y-4">
      <AlertTriangleIcon className="size-6 text-primary" />
      {!!message && (
        <p className="text-sm text-muted-foreground">{message}</p>
      )}
    </div>
  );
};
