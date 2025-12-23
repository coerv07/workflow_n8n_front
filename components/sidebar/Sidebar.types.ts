import { LucideIcon } from "lucide-react";

export interface SidebarItem {
  title: string;
  icon: LucideIcon;
  url: string;
  isVisible?: boolean;
}

export interface SidebarGroup {
  title: string;
  items: SidebarItem[];
}

export interface AppSidebarProps {
  groups: SidebarGroup[];
  footer?: React.ReactNode;
  logo: {
    name: string;
    src: string;
    href?: string;
  };
}
