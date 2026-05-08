import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/accessibility/AccessibilityWidget";
import { A11yProvider } from "@/components/accessibility/A11yProvider";

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
  title: "Imagic Creation",
  description: "Creative Production House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" as="image" href="/mascot.png" />
        <link rel="preload" as="image" href="/imagic logo.png" />
      </head>

      <body className="min-h-full flex flex-col bg-[#0F0F0F] text-white">
        <A11yProvider>
          <main id="main-content" className="flex-1">
            {children}
          </main>

          <CookieConsent />
          <AccessibilityWidget />
        </A11yProvider>
      </body>
    </html>
  );
}
