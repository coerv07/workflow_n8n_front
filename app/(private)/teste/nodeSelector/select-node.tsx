"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";

interface SelectNodeProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (nodeType: string) => void;
}

const NODES = [{ id: "HTTP", label: "HTTP Request" }];

export function SelectNode({ open, onOpenChange, onSelect }: SelectNodeProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <h2 className="text-lg font-semibold mb-4">Selecione um node</h2>

        <div className="space-y-2">
          {NODES.map((node) => (
            <button
              key={node.id}
              className="w-full rounded-md border p-3 text-left hover:bg-muted"
              onClick={() => {
                onSelect(node.id);
                onOpenChange(false);
              }}
            >
              {node.label}
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
