"use client";

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

import { NodeBaseSidebar } from "@/components/sidebar/NodeBaseSidebar";
import { AppHeader } from "@/components/Header/AppHeader";
import { AppHeaderLeft } from "@/components/Header/slots/appHeaderLeft";
import { WorkflowHeaderSearch } from "@/components/teste/input";
import { AppHeaderCenter } from "@/components/Header/slots/AppHeaderCenter";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <NodeBaseSidebar />

      <SidebarInset className="flex flex-col bg-background">
        <AppHeader>
          <AppHeaderLeft>
            <SidebarTrigger />
          </AppHeaderLeft>
          <AppHeaderCenter>
            <WorkflowHeaderSearch />
          </AppHeaderCenter>
        </AppHeader>

        <main className="flex-1 overflow-auto p-6 bg-muted/40">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
