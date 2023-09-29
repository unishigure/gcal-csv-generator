import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { env } from "node:process";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: env.BASE_URL ? new URL(env.BASE_URL) : null,
  title: "gCal CSV Generator",
  description: "Generate CSV for Google Calendar",
  keywords: ["Google Calender", "CSV", "Tool"],
  themeColor: "#94a3b8",
  robots: "index, follow",
  openGraph: {
    images: "/image.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
