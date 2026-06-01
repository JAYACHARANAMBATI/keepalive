import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeepAlive — Keep Your Free Server Awake. Forever. Free.",
  description:
    "KeepAlive automatically pings your Render/Railway free-tier server every 10 minutes so it never cold-starts. No login. No credit card. ₹0 forever.",
  keywords: [
    "keep render server awake",
    "prevent render cold start",
    "free server uptime",
    "render free tier fix",
    "keepalive ping",
  ],
  authors: [{ name: "Jaya Charan Ambati" }],
  openGraph: {
    title: "KeepAlive — No More Cold Starts. Free Forever.",
    description:
      "Ping your free-tier backend every 10 minutes. No login. No credit card. ₹0.",
    url: "https://keepalive-indol.vercel.app",
    siteName: "KeepAlive",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KeepAlive — No More Cold Starts",
    description: "Keep your Render server awake. Free. Forever.",
    creator: "@jayacharan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
