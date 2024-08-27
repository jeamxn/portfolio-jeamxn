import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "포트폴리오 · 최재민",
  description: "Jeamin Choi's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="w-full h-full overflow-x-hidden">
      <body className="dark:bg-black bg-white w-full h-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
