"use client";

import { StarIcon, LogOutIcon, CreditCardIcon } from "lucide-react";

import { AppSidebar } from "./AppSidebar";
import { sidebarGroups } from "./sidebar.config";

export function NodeBaseSidebar() {
  return (
    <AppSidebar
      logo={{
        name: "NodeBase",
        src: "/logo.svg",
        href: "/",
      }}
      groups={sidebarGroups}
      footer={
        <div className="flex flex-col gap-1">
          <button
            type="button"
            className="flex items-center gap-4 px-4 h-10 cursor-pointer"
          >
            <StarIcon className="size-4" />
            Upgrade to Pro
          </button>

          <button
            type="button"
            className="flex items-center gap-4 px-4 h-10 cursor-pointer"
          >
            <CreditCardIcon className="size-4" />
            Billing Portal
          </button>

          <button
            type="button"
            className="flex items-center gap-4 px-4 h-10 cursor-pointer"
          >
            <LogOutIcon className="size-4" />
            Sign out
          </button>
        </div>
      }
    />
  );
}
