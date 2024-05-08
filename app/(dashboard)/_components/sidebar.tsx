"use client";

import { cn } from "@/lib/utils";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Landmark, Layout, PenTool } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dark } from "@clerk/themes";

export const Sidebar = () => {
  const pathName = usePathname();
  const routes = [
    {
      label: "Finansije",
      icon: <Landmark className="w-4 h-4 mr-2" />,
      href: "/finance",
    },
    {
      label: "Organizacija",
      icon: <Layout className="w-4 h-4 mr-2" />,
      href: "/organizacija",
    },
    {
      label: "Računi",
      icon: <PenTool className="w-4 h-4 mr-2" />,
      href: "/accounting",
    },
  ];

  return (
    <div className="h-full p-2 bg flex flex-col bg-white relative border-r-2">
      <div className="text-center font-bold text-4xl my-4 ">Meni</div>
      {routes.map((route, index) => (
        <Link
          href={route.href}
          className={cn(
            "flex items-center transition duration-200 hover:bg-[#404040] hover:text-white font-semibold text-lg rounded-md m-2 px-2",
            pathName === route.href && "bg-[#404040] text-white"
          )}
          key={index}
        >
          {route.icon}
          {route.label}
        </Link>
      ))}
      <div className="absolute inset-x-0 bottom-4 left-4">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              baseTheme: dark,
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
                button: {
                  backgroundColor: "#404040",
                  padding: 4,
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#262626",
                  },
                },
              },
            }}
            showName
          />
        </SignedIn>
      </div>
    </div>
  );
};
