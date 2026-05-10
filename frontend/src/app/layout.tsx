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

  description: "Creative Production House in Sri Lanka",
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