"use client";
export function AppHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className="relative flex h-14 items-center border-b px-4">
      {children}
    </header>
  );
}
