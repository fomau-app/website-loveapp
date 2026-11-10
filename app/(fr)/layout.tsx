import type { Metadata, Viewport } from "next";
import { dmSans, fraunces } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  applicationName: "LoveApp - Couple Games",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#16120f" },
    { media: "(prefers-color-scheme: light)", color: "#faf3ea" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
