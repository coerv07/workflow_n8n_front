"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

import { AppSidebarProps } from "./Sidebar.types";

export function AppSidebar({ groups, footer, logo }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="gap-x-2 h-10 px-4">
            <Link href={logo.href ?? "/"}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={30}
                height={30}
              />
              <span className="font-semibold text-lg">
                {logo.name}
              </span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>

      <SidebarContent>
        {groups.map((group, index) => (
          <SidebarGroup
            key={`${group.title}-${index}`}
            className="p-0 m-0"
          >
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items
                  .filter((item) => item.isVisible !== false)
                  .map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className="gap-x-4 h-10 px-4"
                      >
                        <Link href={item.url}>
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {footer && <SidebarFooter>{footer}</SidebarFooter>}
    </Sidebar>
  );
}
