import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const font = Nunito({ subsets: ["latin"] });

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
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
