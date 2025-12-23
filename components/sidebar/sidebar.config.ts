import {
  FolderOpenIcon,
  HistoryIcon,
  KeyIcon,
} from "lucide-react";

import { SidebarGroup } from "./Sidebar.types";

export const sidebarGroups: SidebarGroup[] = [
  {
    title: "Main",
    items: [
      {
        title: "Workflows",
        icon: FolderOpenIcon,
        url: "/workflows",
      },
    ],
  },
  {
    title: "Credentials",
    items: [
      {
        title: "Credentials",
        icon: KeyIcon,
        url: "/credentials",
      },
    ],
  },
  {
    title: "Executions",
    items: [
      {
        title: "Executions",
        icon: HistoryIcon,
        url: "/executions",
      },
    ],
  },
];
