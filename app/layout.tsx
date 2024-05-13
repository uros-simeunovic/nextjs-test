import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";
import { SheetProvider } from "@/providers/sheet-provider";

const font = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fine Ans",
  description: "Organize and monitor your business easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <main className="flex-1 flex flex-col items-center justify-center h-full">
            <QueryProvider>
              <SheetProvider />
              <Toaster />
              {children}
            </QueryProvider>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
