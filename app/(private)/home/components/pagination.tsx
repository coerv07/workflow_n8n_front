"use client";

import { Card } from "@/components/ui/card";
import { Workflow } from "lucide-react";
import { useRouter } from "next/navigation";

interface Item {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface ItemListProps {
  items: Item[];
}

export function ItemList({ items }: ItemListProps) {
  const router = useRouter();

  function abrirWorkflow(id: string) {
    router.push(`/workflows/${id}`);
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <Card key={item.id} onClick={() => abrirWorkflow(item.id)} className="p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <Workflow className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
              <p className="text-sm text-muted-foreground truncate">ID: {item.id}</p>
            </div>

            <div className="flex-shrink-0 text-right">
              <p className="text-sm font-medium text-foreground">{item.createdAt.split(" ")[0]}</p>
              <p className="text-xs text-muted-foreground">{item.createdAt.split(" ")[1]}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
