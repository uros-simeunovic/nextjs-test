"use client";

import { cn } from "@/lib/utils";
import { Landmark, ReceiptIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathName = usePathname();
  const routes = [
    {
      label: "Finansije",
      icon: <Landmark className="w-4 h-4 mr-2" />,
      href: "/finance",
    },
    {
      label: "Računi",
      icon: <ReceiptIcon className="w-4 h-4 mr-2" />,
      href: "/accounting",
    },
  ];

  return (
    <div className="h-full p-2 rounded-xl bg-slate-400 flex flex-col">
      <div className="text-center font-bold text-2xl my-4">Meni</div>
      {routes.map((route, index) => (
        <Link
          href={route.href}
          className={cn(
            "flex items-center hover:opacity-75 font-semibold text-lg rounded-md m-2 px-2",
            pathName === route.href && "bg-red-400"
          )}
          key={index}
        >
          {route.icon}
          {route.label}
        </Link>
      ))}
    </div>
  );
};
