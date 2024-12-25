import type { Metadata } from "next";
import "./globals.css";
import { Inter, PlusJakartaSans } from "@/utils/customFonts"

export const metadata: Metadata = {
  title: "Justine Rei",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Inter.variable} ${PlusJakartaSans.variable}`}>{children}</body>
    </html>
  );
}
