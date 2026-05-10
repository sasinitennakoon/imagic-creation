import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.imagiccreation.lk"),

  title: {
    default: "Imagic Creation | Creative Production House",
    template: "%s | Imagic Creation",
  },

  description:
    "Imagic Creation is a Sri Lankan creative production house specializing in videography, photography, live production, editing, graphic design, UI/UX design, and web development.",

  keywords: [
    "Imagic",
    "imagic",
    "Imagic Creation",
    "Production House Sri Lanka",
    "Videography",
    "Photography",
    "Video Production",
    "UI UX Design",
    "Web Development",
    "Graphic Design",
    "Creative Agency",
    "web design"
  ],

  authors: [{ name: "Imagic Creation" }],

  creator: "Imagic Creation",

  openGraph: {
    title: "Imagic Creation | Creative Production House",
    description:
      "Creative production house specializing in videography, photography, live production, editing, UI/UX design, graphic design, and web development.",
    url: "https://www.imagiccreation.lk",
    siteName: "Imagic Creation",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Imagic Creation",
    description:
      "Creative production house specializing in media production and digital experiences.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};