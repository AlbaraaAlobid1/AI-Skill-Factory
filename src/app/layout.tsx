import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Skill Factory",
  description: "Turn natural-language ideas into production-ready AI skills.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}