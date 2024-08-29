import type { Metadata } from "next";
import "./globals.css";
import React from "react";

import { getOgImage } from "./get";

export const generateMetadata = async (): Promise<Metadata> => {
  const ogImage = await getOgImage();
  return {
    title: "포트폴리오 · 최재민",
    description: "Jeamin Choi's portfolio website",
    openGraph: {
      title: "포트폴리오 · 최재민",
      description: "Jeamin Choi's portfolio website",
      type: "website",
      locale: "ko_KR",
      url: "https://portfolio.jeamxn.dev/",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Jeamin Choi",
        },
      ],
    },
  };
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
