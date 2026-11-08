import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SpaceBackground from "@/components/SpaceBackground";
import { portfolioConfig } from "@/config/portfolio.config";

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
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#121014] text-[#F5EBDD] font-poppins min-h-screen relative selection:bg-[#F2765E] selection:text-[#121014] overflow-x-hidden">
        {/* INTERACTIVE SOLAR SYSTEM PARALLAX MAP & SCROLLING PLANETS */}
        <SpaceBackground />

        {/* FIXED SLEEK RETRO PUNK NAVIGATION DOCK */}
        <Navbar />

        {/* MAIN EDITORIAL CONTENT CONTAINER (GENEROUS TOP PADDING) */}
        <main className="relative z-10 w-full min-h-screen flex flex-col justify-start items-center pt-28 sm:pt-36 pb-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
