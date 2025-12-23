export function AppHeaderCenter({ children }: { children?: React.ReactNode }) {
  return (
    <div className="absolute inset-x-0 flex justify-center pointer-events-none">
      <div className="pointer-events-auto ml-">{children}</div>
    </div>
  );
}
