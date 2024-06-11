import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import "./globals.css";
import "../fontawesome"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bulawayo Basketball Association",
  description: "The official Bulawayo Basketball Association Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
