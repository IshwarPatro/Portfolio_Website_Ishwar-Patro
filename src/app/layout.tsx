import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MegacityBackground from "@/components/MegacityBackground";
import { portfolioConfig } from "@/config/portfolio.config";

export const viewport: Viewport = {
  themeColor: "#070a12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.seo.url),
  title: {
    default: `${portfolioConfig.name} | ${portfolioConfig.title}`,
    template: `%s - ${portfolioConfig.name}`,
  },
  description: portfolioConfig.description,
  keywords: portfolioConfig.seo.keywords,
  authors: portfolioConfig.seo.authors,
  creator: portfolioConfig.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioConfig.seo.url,
    title: `${portfolioConfig.name} — ${portfolioConfig.headline}`,
    description: portfolioConfig.description,
    siteName: `${portfolioConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    creator: portfolioConfig.seo.twitterHandle,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070a12] text-[#e2e8f0] font-heading min-h-screen relative selection:bg-[#ff5038] selection:text-[#070a12] overflow-x-hidden">
        {/* PROCEDURAL 2D/3D ATMOSPHERIC MEGASITY CANVAS & CRT SCANLINES */}
        <MegacityBackground />

        {/* FLOATING TOP CYBER HUD DOCK */}
        <Navbar />

        {/* MAIN FOREGROUND CONTENT */}
        {children}
      </body>
    </html>
  );
}
