"use client";

import { GearIcon, HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavigation() {
  const url = usePathname();
  const paths = [
    {
      name: "Home",
      href: "/dashboard",
      icon: <HomeIcon className="h-4 w-4" />,
    },
    {
      name: "Teams",
      href: "/dashboard/teams",
      icon: <PersonIcon className="h-4 w-4" />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <GearIcon className="h-4 w-4" />,
    },
  ];

  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      {paths.map((path) => {
        return (
          <Link
            key={path.name}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${
              url === path.href && "bg-gray-100 text-gray-900"
            }`}
            href={path.href}
          >
            {path.icon}
            {path.name}
          </Link>
        );
      })}
    </nav>
  );
}
