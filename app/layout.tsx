import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jacob Tye - Full Stack Developer",
  description:
    "Jacob Tye is a Sydney based Full Stack Developer specialising in scalable web applications and cloud architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`bg-gradient-to-br from-white via-green-50 to-white scroll-smooth`} lang="en">
      <body className={`${inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
