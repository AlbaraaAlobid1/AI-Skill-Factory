import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Skill Factory",
  description: "Turn natural-language ideas into production-ready AI skills.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
