import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sana Clone",
  description: "Open-source learning platform — Sana Learn UI clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
