import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { PwaRegistration } from "@/components/farewell/PwaRegistration";

export const metadata: Metadata = {
  title: "Farewell Keepsake",
  description: "UI-only MVP for farewell messages, photos, and gift checklists.",
  manifest: "/manifest.json",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body>
      <PwaRegistration />
      {children}
    </body>
  </html>
);

export default RootLayout;
