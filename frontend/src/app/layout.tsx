import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/accessibility/AccessibilityWidget";
import { A11yProvider } from "@/components/accessibility/A11yProvider";
import SplashProvider from "@/components/SplashProvider";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.imagiccreation.lk"),

  verification: {
    google: "iavLYZTdvTH2o5w7wcxG4vOQHzsp4RmV-4KTqqwz-3E",
  },

  title: {
    default: "Imagic Creation | Creative Production House",
    template: "%s | Imagic Creation",
  },

  description: "Imagic Creation is a creative production house in Sri Lanka specializing in videography, photography, live production, editing, UI/UX design, graphic design, and web development.",

  applicationName: "Imagic Creation",

  keywords: [
    "imagic",
    "Imagic",
    "imagic creation",
    "Imagic Creation",
    "Sri Lanka production house",
    "videography Sri Lanka",
    "photography Sri Lanka",
    "UI UX design Sri Lanka",
    "web development Sri Lanka",
    "creative agency Sri Lanka",
  ],

  authors: [{ name: "Imagic Creation" }],
  creator: "Imagic Creation",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.imagiccreation.lk",
    title: "Imagic Creation",
    description:
      "Creative production house in Sri Lanka for video, photography, design, and web development.",
    siteName: "Imagic Creation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Imagic Creation",
    description:
      "Creative production house in Sri Lanka",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <A11yProvider>
          <SplashProvider>
            <main>{children}</main>
          </SplashProvider>

          <CookieConsent />
          <AccessibilityWidget />
        </A11yProvider>
      </body>
    </html>
  );
}