"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, History } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

export function SidebarItem({ href, icon, label, isActive }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "sidebar-item",
        isActive && "bg-secondary font-medium"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-[72px] bg-black z-40">
      <div className="flex flex-col items-center pt-2">
        <SidebarItem
          href="/"
          icon={<Home className="sidebar-icon" />}
          label="Home"
          isActive={pathname === "/"}
        />

        <SidebarItem
          href="/shorts"
          icon={
            <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 14.65V9.35L15 12L10 14.65Z" fill="currentColor"/>
              <path d="M6 4.75L18 4.75C18.69 4.75 19.25 5.31 19.25 6V18C19.25 18.69 18.69 19.25 18 19.25L6 19.25C5.31 19.25 4.75 18.69 4.75 18V6C4.75 5.31 5.31 4.75 6 4.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          label="Shorts"
          isActive={pathname === "/shorts"}
        />

        <SidebarItem
          href="/subscriptions"
          icon={
            <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18V12L15 15L10 18Z" fill="currentColor"/>
              <path d="M20 7H4V16H20V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 17.5H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          label="Subscriptions"
          isActive={pathname === "/subscriptions"}
        />

        <SidebarItem
          href="/you"
          icon={
            <svg className="sidebar-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 21V16C6 14.9391 6.42143 13.9217 7.17157 13.1716C7.92172 12.4214 8.93913 12 10 12H14C15.0609 12 16.0783 12.4214 16.8284 13.1716C17.5786 13.9217 18 14.9391 18 16V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          label="You"
          isActive={pathname === "/you"}
        />

        <SidebarItem
          href="/history"
          icon={<History className="sidebar-icon" />}
          label="History"
          isActive={pathname === "/history"}
        />
      </div>
    </aside>
  );
}
