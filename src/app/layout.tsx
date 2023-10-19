import type { Metadata } from "next";
import SideBar from "@/components/shared/SideBar";
import Navbar from "@/components/shared/Navbar";

import "../styles/globals.css";
import { WindowWidthProvider } from "@/context/windowWidthContext";

export const metadata: Metadata = {
  title: "XSocial",
  description: "social media",
  keywords: ["twitter", "x", "facebook", "people", "social"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <WindowWidthProvider>
          <header>
            <Navbar />
          </header>
          <main className="m-0">
            <SideBar />

            {children}
          </main>
        </WindowWidthProvider>
      </body>
    </html>
  );
}
