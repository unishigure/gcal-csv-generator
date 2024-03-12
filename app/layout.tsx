import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { env } from "node:process";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: env.BASE_URL ? new URL(env.BASE_URL) : new URL("http://localhost"),
    title: "gCal CSV Generator",
    description: "Generate CSV for Google Calendar",
    keywords: ["Google Calendar", "CSV", "Tool"],
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "/",
        title: "gCal CSV Generator",
        description: "Generate CSV for Google Calendar",
        images: [
            {
                url: "/image.png",
                width: "1200",
                height: "630",
            },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: "#94a3b8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
            </body>
        </html>
    );
}
