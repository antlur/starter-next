import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipToMain } from "@/components/skip-to-main";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Antlur Next.js Starter",
  description: "Antlur is building the best tools for modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased flex flex-col`}>
        <SkipToMain />
        {children}
      </body>
      <GoogleAnalytics gaId={googleAnalyticsId} />
    </html>
  );
}

function LoadingSkeleton() {
  return (
    <div className="p-8">
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
}
