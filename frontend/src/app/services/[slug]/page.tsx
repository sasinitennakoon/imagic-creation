"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HandPointing, CheckCircle, ArrowRight } from "@phosphor-icons/react";
import CTA from "@/components/Cta";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type ServiceStep = {
  gif: string;
  title: string;
  description: string;
};

type WhyCard = {
  title: string;
  description: string;
};

type ServiceOffering = {
  title: string;
  description: string;
};

type ServiceDetail = {
  slug: string;
  title: string;
  subtext: string;
  breadcrumb: string;
  mascot: string;
  whatWeDoImage: string;
  whatWeDoText: string;
  offeringsImage: string;
  offerings: ServiceOffering[];
  steps: ServiceStep[];
  whyCards: WhyCard[];
  portfolioTab: string;
};

// ─────────────────────────────────────────────
// Per-service data
// ─────────────────────────────────────────────
const serviceData: Record<string, ServiceDetail> = {
  photography: {
    slug: "photography",
    title: "Photography",
    subtext:
      "We frame the world's most fleeting moments with intention, craft, and a distinct visual language that speaks before words do.",
    breadcrumb: "Photography",
    mascot: "/mascots/photo mascot.png",
    whatWeDoImage: "/services/photography.jpg",
    whatWeDoText:
      "Our photography team blends technical mastery with artistic intuition to produce imagery that resonates. From boardroom headshots to large-scale product campaigns, every shot is deliberately composed to serve your brand's unique story. We don't just point a camera — we craft a visual narrative that leaves a lasting impression on your audience.",
    offeringsImage: "/services/detail/photo-offerings.jpg",
    offerings: [
      {
        title: "Corporate Photography",
        description:
          "Professional headshots, team portraits, and office environment shoots that reinforce your brand's credibility.",
      },
      {
        title: "Event Coverage",
        description:
          "Full-day event documentation capturing candid moments, keynotes, and crowd energy in high detail.",
      },
      {
        title: "Product Shoots",
        description:
          "Studio and lifestyle product photography optimised for e-commerce, print, and digital campaigns.",
      },
      {
        title: "Outdoor Sessions",
        description:
          "Location scouting and natural-light sessions that add depth and authenticity to your visual content.",
      },
    ],
    steps: [
      {
        gif: "/gifs/search.gif",
        title: "Discovery Call",
        description:
          "We align on your goals, brand tone, location preferences, and shot list before a single shutter fires.",
      },
      {
        gif: "/gifs/To Do.gif",
        title: "Creative Planning",
        description:
          "Mood boards, lighting diagrams, and a detailed schedule are prepared so shoot day runs flawlessly.",
      },
      {
        gif: "/gifs/photography.gif",
        title: "The Shoot",
        description:
          "Our team arrives fully equipped, directing talent and capturing every angle with precision.",
      },
      {
        gif: "/gifs/edit.gif",
        title: "Post-Processing",
        description:
          "Colour correction, retouching, and export in every format you need — delivered within 5 business days.",
      },
    ],
    whyCards: [
      {
        title: "Gear That Matches the Job",
        description:
          "We deploy the right camera bodies, lenses, and lighting rigs for each unique shoot environment.",
      },
      {
        title: "Art-Directed Consistency",
        description:
          "Every image in a campaign is colour-matched so your brand looks cohesive across all channels.",
      },
      {
        title: "Fast Turnaround",
        description:
          "Edited galleries delivered within five business days without sacrificing quality.",
      },
      {
        title: "Commercial Licensing",
        description:
          "Full commercial usage rights transferred on delivery — no hidden fees or usage caps.",
      },
      {
        title: "Experienced Direction",
        description:
          "Our photographers are also comfortable directors, putting even camera-shy subjects at ease.",
      },
    ],
    portfolioTab: "Photography",
  },

  "video-production": {
    slug: "video-production",
    title: "Video Production",
    subtext:
      "Cinematic storytelling engineered for brands that refuse to be invisible in a scroll-driven world.",
    breadcrumb: "Video Production",
    mascot: "/mascots/new video mascot.png",
    whatWeDoImage: "/services/video production.jpg",
    whatWeDoText:
      "From concept to colour grade, we handle every frame of your video production. Our end-to-end service covers script development, location scouting, professional filming, and post-production finishing — delivering broadcast-quality content that drives real engagement whether it lives on YouTube, LinkedIn, or a stadium screen.",
    offeringsImage: "/services/detail/video-offerings.jpg",
    offerings: [
      {
        title: "Commercial Videos",
        description:
          "30-second to 3-minute brand commercials crafted to convert viewers into loyal customers.",
      },
      {
        title: "Corporate Films",
        description:
          "Internal training videos, company culture films, and investor presentations with a cinematic edge.",
      },
      {
        title: "Social Media Content",
        description:
          "Short-form vertical and horizontal cuts optimised for Instagram Reels, TikTok, and YouTube Shorts.",
      },
      {
        title: "Event Videography",
        description:
          "Multi-camera event capture with same-day highlight reels and full extended edits.",
      },
    ],
    steps: [
      {
        gif: "/gifs/note.gif",
        title: "Script & Concept",
        description:
          "We develop or refine your script, storyboard every scene, and lock a creative direction before cameras roll.",
      },
      {
        gif: "/gifs/check board.gif",
        title: "Pre-Production",
        description:
          "Location permits, talent casting, shot lists, and equipment prep are handled in meticulous detail.",
      },
      {
        gif: "/gifs/calendar.gif",
        title: "Production Day",
        description:
          "A full crew — director, DP, sound recordist, and gaffer — ensures every scene is captured perfectly.",
      },
      {
        gif: "/gifs/edit.gif",
        title: "Post-Production",
        description:
          "Editing, colour grading, motion graphics, and sound design are applied to create the final cut.",
      },
    ],
    whyCards: [
      {
        title: "Cinema-Grade Equipment",
        description:
          "We shoot on cinema cameras with professional lenses, gimbals, and drone rigs.",
      },
      {
        title: "End-to-End Service",
        description:
          "One team from concept to delivery — no handoffs, no miscommunication.",
      },
      {
        title: "Platform-Native Formats",
        description:
          "We deliver your video in the exact specs for every platform you need to publish on.",
      },
      {
        title: "Revision Rounds Included",
        description:
          "Two full revision rounds are built into every project at no extra cost.",
      },
      {
        title: "Story-First Approach",
        description:
          "Every creative decision is made to serve the story and your audience — not just look flashy.",
      },
    ],
    portfolioTab: "Video Production",
  },

  "live-production": {
    slug: "live-production",
    title: "Live Production",
    subtext:
      "Your live moment, broadcast with zero compromise — from multi-camera rigs to real-time direction.",
    breadcrumb: "Live Production",
    mascot: "/mascots/live mascot.png",
    whatWeDoImage: "/services/live production.jpg",
    whatWeDoText:
      "Live production is high-stakes. One dropped frame or a missed cut can break the experience for thousands of viewers. Our crew specialises in real-time multi-camera direction, online streaming infrastructure, and on-site technical production that keeps your event looking polished from the first second to the last.",
    offeringsImage: "/services/detail/live-offerings.jpg",
    offerings: [
      {
        title: "Live Streaming",
        description:
          "Multi-platform streaming to YouTube Live, Facebook, Zoom, and custom RTMP endpoints simultaneously.",
      },
      {
        title: "Multi-Camera Setup",
        description:
          "Up to 6-camera switched productions with jib, gimbal, and fixed rigs for full coverage.",
      },
      {
        title: "Event Broadcasting",
        description:
          "Full production for conferences, award nights, product launches, and hybrid events.",
      },
      {
        title: "Real-time Direction",
        description:
          "An on-site director calls every cut live so your stream feels as dynamic as broadcast television.",
      },
    ],
    steps: [
      {
        gif: "/gifs/location.gif",
        title: "Site Recce",
        description:
          "We visit the venue in advance to plan camera positions, power runs, and network infrastructure.",
      },
      {
        gif: "/gifs/Setup.gif",
        title: "Setup & Rehearsal",
        description:
          "Full rig is installed the day before, with a complete technical rehearsal to iron out every variable.",
      },
      {
        gif: "/gifs/live.gif",
        title: "Live Day",
        description:
          "Our director, operators, and streaming engineer work in sync to deliver a flawless broadcast.",
      },
      {
        gif: "/gifs/videography.gif",
        title: "Recordings & VOD",
        description:
          "Uncompressed recordings and edited highlight cuts are delivered within 48 hours of the event.",
      },
    ],
    whyCards: [
      {
        title: "Redundant Systems",
        description:
          "Backup encoders, cables, and internet failover so your stream never drops mid-show.",
      },
      {
        title: "Experienced Live Directors",
        description:
          "Our directors have called cuts for audiences of 50 to 50,000 without missing a beat.",
      },
      {
        title: "Custom Graphics Overlays",
        description:
          "Lower thirds, sponsor bugs, and animated transitions designed to match your brand.",
      },
      {
        title: "Multi-Platform Simultaneous",
        description:
          "Reach every audience at once by streaming to multiple platforms in a single push.",
      },
      {
        title: "Post-Event VOD Editing",
        description:
          "We clean up the recording and package it as an on-demand asset you can publish immediately.",
      },
    ],
    portfolioTab: "Live Production",
  },

  "graphic-design": {
    slug: "graphic-design",
    title: "Graphic Design",
    subtext:
      "Visual identities and print-ready assets that give your brand an unmistakable presence at every touchpoint.",
    breadcrumb: "Graphic Design",
    mascot: "/mascots/graphic mascot.png",
    whatWeDoImage: "/services/graphic design.jpg",
    whatWeDoText:
      "We design with purpose and personality. Our graphic design work spans complete brand identity systems to individual campaign assets — each piece considered in context and crafted to communicate clearly, attract attention, and reinforce your brand's authority. Whether it's a rebrand or a single-page flyer, we bring the same rigour and creative ambition.",
    offeringsImage: "/services/detail/design-offerings.jpg",
    offerings: [
      {
        title: "Brand Identity",
        description:
          "Logo design, colour palettes, typography systems, and full brand guidelines documents.",
      },
      {
        title: "Posters & Flyers",
        description:
          "Print-ready artwork for events, campaigns, and retail — built for impact at any scale.",
      },
      {
        title: "Social Media Designs",
        description:
          "Templated and bespoke social graphics that keep your feed cohesive and conversion-focused.",
      },
      {
        title: "Packaging Design",
        description:
          "Structural and surface packaging design that wins on shelf and delights unboxing customers.",
      },
    ],
    steps: [
      {
        gif: "/gifs/To Do.gif",
        title: "Brand Brief",
        description:
          "We dig into your competitors, audience, and values to inform every design decision.",
      },
      {
        gif: "/gifs/Project.gif",
        title: "Concept Exploration",
        description:
          "Three distinct creative directions are presented with rationale — you choose the path forward.",
      },
      {
        gif: "/gifs/eye.gif",
        title: "Refinement",
        description:
          "Your selected direction is refined across two revision rounds until every detail is perfect.",
      },
      {
        gif: "/gifs/Paper Plane.gif",
        title: "Asset Handoff",
        description:
          "Final files delivered in all formats — AI, EPS, PDF, PNG, SVG — ready for any application.",
      },
    ],
    whyCards: [
      {
        title: "Strategy-Led Design",
        description:
          "Every visual decision is grounded in brand strategy, not just aesthetic preference.",
      },
      {
        title: "Print & Digital Mastery",
        description:
          "We prepare files for both print production and digital screens with exacting accuracy.",
      },
      {
        title: "Rapid Concept Delivery",
        description:
          "Initial concepts delivered within 5 business days of receiving your brief.",
      },
      {
        title: "Scalable Design Systems",
        description:
          "We build design systems that grow with your business — not one-off assets that become orphans.",
      },
      {
        title: "Unlimited Brand Applications",
        description:
          "From business cards to billboards, we ensure your identity adapts without losing integrity.",
      },
    ],
    portfolioTab: "Graphic Design",
  },

  "web-design": {
    slug: "web-design",
    title: "Web Design",
    subtext:
      "Digital experiences engineered around real users — beautiful, intuitive, and conversion-optimised from the first interaction.",
    breadcrumb: "Web Design",
    mascot: "/mascots/design mascot.png",
    whatWeDoImage: "/services/web design.jpg",
    whatWeDoText:
      "Great products start with deep user understanding. Our UX process uncovers friction points, maps ideal journeys, and validates solutions through rapid prototyping — long before a single line of code is written. The result is interfaces that users love and that businesses can build with confidence, because every decision is evidence-backed.",
    offeringsImage: "/services/detail/web-offerings.jpg",
    offerings: [
      {
        title: "App Design",
        description:
          "End-to-end iOS and Android app design from user flows to pixel-perfect Figma handoff.",
      },
      {
        title: "Web Design",
        description:
          "Conversion-focused web designs built on a component system that your dev team will thank you for.",
      },
      {
        title: "Prototyping",
        description:
          "High-fidelity interactive prototypes in Figma for stakeholder sign-off and usability testing.",
      },
      {
        title: "User Research",
        description:
          "Interviews, surveys, and usability tests that give your design decisions a factual foundation.",
      },
    ],
    steps: [
      {
        gif: "/gifs/Research.gif",
        title: "User Research",
        description:
          "We interview real users, analyse competitors, and synthesise insights into design principles.",
      },
      {
        gif: "/gifs/ui.gif",
        title: "Wireframing",
        description:
          "Low-fidelity wireframes map every user journey before visual design begins.",
      },
      {
        gif: "/gifs/Feedback.gif",
        title: "Prototype & Test",
        description:
          "Interactive prototypes are tested with real users and iterated based on observed behaviour.",
      },
      {
        gif: "/gifs/Minecraft.gif",
        title: "Dev Handoff",
        description:
          "Annotated Figma files, component libraries, and design tokens ensure zero-loss implementation.",
      },
    ],
    whyCards: [
      {
        title: "Research Before Pixels",
        description:
          "We never open Figma until we understand your users — no assumptions, no guesswork.",
      },
      {
        title: "Accessibility Built In",
        description:
          "WCAG 2.1 AA compliance is a baseline, not an afterthought, in every interface we design.",
      },
      {
        title: "Figma-Native Delivery",
        description:
          "Organised, auto-laid-out Figma files that your team can maintain without a design degree.",
      },
      {
        title: "Quantified Outcomes",
        description:
          "We establish conversion and engagement benchmarks before design and measure against them after.",
      },
      {
        title: "Cross-Platform Thinking",
        description:
          "Designs account for mobile, tablet, and desktop simultaneously — never retrofitted after the fact.",
      },
    ],
    portfolioTab: "Web Design",
  },

  "web-development": {
    slug: "web-development",
    title: "Web Development",
    subtext:
      "Fast, scalable, and meticulously engineered websites and applications that perform as beautifully as they look.",
    breadcrumb: "Web Development",
    mascot: "/mascots/dev mascot.png",
    whatWeDoImage: "/services/web development.jpg",
    whatWeDoText:
      "We build web experiences on modern stacks — Next.js, React, Node.js — with performance, security, and maintainability at the core. Whether you need a marketing site, a complex SaaS platform, or a custom e-commerce solution, our team architects, builds, and deploys software that scales with your business without accumulating technical debt.",
    offeringsImage: "/services/detail/web-offerings.jpg",
    offerings: [
      {
        title: "Frontend Development",
        description:
          "Pixel-perfect implementation of designs using React or Next.js with a focus on performance and accessibility.",
      },
      {
        title: "Backend Systems",
        description:
          "Robust REST and GraphQL APIs, database architecture, and serverless infrastructure built to scale.",
      },
      {
        title: "E-commerce Solutions",
        description:
          "Custom Shopify builds, WooCommerce setups, or bespoke storefronts integrated with payment gateways.",
      },
      {
        title: "CMS Integration",
        description:
          "Headless CMS setups (Strapi, Sanity, Contentful) that empower your team to manage content independently.",
      },
    ],
    steps: [
      {
        gif: "/gifs/Search.gif",
        title: "Technical Discovery",
        description:
          "We audit your existing stack, define technical requirements, and select the optimal architecture.",
      },
      {
        gif: "/gifs/Setup.gif",
        title: "Project Setup",
        description:
          "Monorepo, CI/CD pipeline, testing suite, and staging environment established on day one.",
      },
      {
        gif: "/gifs/develop.gif",
        title: "Agile Development",
        description:
          "Two-week sprints with demo sessions keep you informed and in control throughout the build.",
      },
      {
        gif: "/gifs/Paper Plane.gif",
        title: "Launch & Handover",
        description:
          "QA, performance optimisation, and a full technical handover with documentation and training.",
      },
    ],
    whyCards: [
      {
        title: "Modern Tech Stack",
        description:
          "We build on Next.js, TypeScript, Tailwind, and Node — battle-tested choices that hire well.",
      },
      {
        title: "Sub-2s Load Times",
        description:
          "Performance is a feature. Every site we ship targets Core Web Vitals in the green.",
      },
      {
        title: "Full Source Code Ownership",
        description:
          "You own everything — repos, credentials, and infrastructure — from day one.",
      },
      {
        title: "Ongoing Support Plans",
        description:
          "Monthly retainer plans cover updates, security patches, and feature additions post-launch.",
      },
      {
        title: "SEO-Ready Architecture",
        description:
          "Server-side rendering, structured data, and semantic HTML give your site a search advantage from launch.",
      },
    ],
    portfolioTab: "Web Development",
  },

  editing: {
    slug: "editing",
    title: "Editing",
    subtext:
      "Where raw footage becomes compelling narrative — refined in every cut, grade, and frame.",
    breadcrumb: "Editing",
    mascot: "/mascots/new editing mascot.png",
    whatWeDoImage: "/services/editing.jpg",
    whatWeDoText:
      "Editing is where the real storytelling happens. Our post-production team works with your raw footage to build a rhythm, emotional arc, and visual language that transforms a collection of clips into a polished piece of content. We handle everything from assembly cut to colour-graded master, with sound design that makes your audience lean in.",
    offeringsImage: "/services/detail/edit-offerings.jpg",
    offerings: [
      {
        title: "Video Editing",
        description:
          "Assembly, rough cut, and fine cut editing with pacing and narrative structure at the forefront.",
      },
      {
        title: "Color Grading",
        description:
          "DaVinci Resolve colour grading that gives your footage a signature cinematic look.",
      },
      {
        title: "Sound Editing",
        description:
          "Dialogue cleanup, music licensing, sound design, and audio mastering for broadcast standards.",
      },
      {
        title: "Post Production",
        description:
          "Motion graphics, VFX compositing, subtitles, and delivery in any format or codec required.",
      },
    ],
    steps: [
      {
        gif: "/gifs/Folder.gif",
        title: "Footage Ingest",
        description:
          "All your media is ingested, organised, and backed up before a single cut is made.",
      },
      {
        gif: "/gifs/cut.gif",
        title: "Assembly & Rough Cut",
        description:
          "We build the narrative structure and present a rough cut for your directional feedback.",
      },
      {
        gif: "/gifs/eye.gif",
        title: "Fine Cut & Grade",
        description:
          "Pacing is refined, colour grading is applied, and motion graphics are integrated.",
      },
      {
        gif: "/gifs/Paper Plane.gif",
        title: "Master & Deliver",
        description:
          "Audio is mastered, final QC is completed, and deliverables are exported in your required formats.",
      },
    ],
    whyCards: [
      {
        title: "DaVinci Resolve Grading",
        description:
          "Industry-standard colour science that gives your footage a professional, cinematic finish.",
      },
      {
        title: "Narrative-First Editing",
        description:
          "We edit for story and emotion first — technical polish comes second, never the other way.",
      },
      {
        title: "Fast Frame Rates",
        description:
          "We work on high-performance editing workstations that handle 4K and 6K footage without proxy delays.",
      },
      {
        title: "Revision Transparency",
        description:
          "Every revision is tracked with time-coded comments so nothing gets lost in feedback loops.",
      },
      {
        title: "Broadcast-Ready Masters",
        description:
          "Deliverables meet the technical specifications of broadcasters, streaming platforms, and cinemas.",
      },
    ],
    portfolioTab: "Editing",
  },
};

// ─────────────────────────────────────────────
// Strapi fetch helper
// ─────────────────────────────────────────────
type StrapiProject = {
  id: number;
  title: string;
  slug: string;
  projectType: string;
  coverImage: {
    url: string;
  } | null;
};

function getStrapiMediaUrl(url?: string | null) {
  if (!url) return "/placeholder.jpg";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  return baseUrl ? `${baseUrl}${url}` : url;
}

async function fetchRelatedProjects(
  projectType: string
): Promise<StrapiProject[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?filters[projectType][$eq]=${encodeURIComponent(projectType)}&populate=*`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return [];

    const json = await res.json();

    console.log("STRAPI PROJECTS:", json);

    return (
      json.data?.map((item: any) => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        projectType: item.projectType,

        coverImage: item.coverImage
          ? {
              url: item.coverImage.url,
            }
          : null,
      })) || []
    );
  } catch (error) {
    console.error(error);
    return [];
  }
}

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function Breadcrumb({ label }: { label: string }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-5">
      <Link href="/" className="hover:text-white transition">
        Home
      </Link>
      <span>/</span>
      <Link href="/services" className="hover:text-white transition">
        Services
      </Link>
      <span>/</span>
      <span className="text-[#C51BE2]">{label}</span>
    </nav>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8A2BE2] mb-3">
      {text}
    </p>
  );
}

function GradientHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl sm:text-3xl md:text-4xl font-bold"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      {children}
    </h2>
  );
}

// ─────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────
export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceData[slug];

  const [projects, setProjects] = useState<StrapiProject[]>([]);

  useEffect(() => {
    if (service) {
      fetchRelatedProjects(service.portfolioTab).then(setProjects);
    }
  }, [service]);

  if (!service) {
    return (
      <main className="bg-[#0F0F0F] text-white min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <p className="text-gray-400 mt-20 text-lg">Service not found.</p>
        <Link href="/services" className="mt-6 text-[#8A2BE2] hover:underline">
          ← Back to Services
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#0F0F0F] text-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
<section className="relative w-full pt-10 sm:pt-14 md:pt-20 pb-16 sm:pb-20 md:pb-28 overflow-hidden">

  {/* Ambient glow */}
  <div
    aria-hidden
    className="
      pointer-events-none 
      absolute 
      -top-40 
      -left-40 
      w-[320px] h-[320px]
      sm:w-[500px] sm:h-[500px]
      md:w-[700px] md:h-[700px]
      rounded-full 
      opacity-20
    "
    style={{
      background:
        "radial-gradient(circle, #C51BE2 0%, #8A2BE2 50%, transparent 70%)",
      filter: "blur(90px)",
    }}
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

    <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-8 lg:gap-14">

      {/* ── LEFT CONTENT ───────────────────── */}
      <div className="w-full md:flex-1 z-10 text-center md:text-left">

        {/* Breadcrumb */}
        <div className="overflow-x-auto scrollbar-hide">
          <nav className="flex items-center justify-center md:justify-start gap-2 text-[11px] sm:text-xs text-gray-400 mb-5 whitespace-nowrap min-w-max">
            
            <Link
              href="/"
              className="hover:text-white transition shrink-0"
            >
              Home
            </Link>

            <span className="shrink-0">/</span>

            <Link
              href="/services"
              className="hover:text-white transition shrink-0"
            >
              Services
            </Link>

            <span className="shrink-0">/</span>

            <span className="text-[#C51BE2] truncate max-w-[160px] sm:max-w-xs">
              {service.breadcrumb}
            </span>
          </nav>
        </div>

        {/* Title */}
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            font-bold
            leading-[1.05]
            tracking-tight
            max-w-3xl
            mx-auto
            md:mx-0
          "
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {service.title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
            {service.title.split(" ").slice(-1)}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="
            text-gray-400
            mt-5
            text-sm
            sm:text-base
            md:text-lg
            max-w-xl
            leading-relaxed
            mx-auto
            md:mx-0
          "
        >
          {service.subtext}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-4 mt-8">

          <Link
            href="/contact"
            className="
              w-full sm:w-auto
              px-6 md:px-7
              py-3
              rounded-full
              text-sm md:text-base
              bg-gradient-to-r
              from-[#C51BE2]
              to-[#8A2BE2]
              hover:opacity-90
              transition
              font-medium
              text-center
            "
          >
            Get a Quote
          </Link>

          <Link
            href="/projects"
            className="
              w-full sm:w-auto
              px-6 md:px-7
              py-3
              rounded-full
              text-sm md:text-base
              border border-white/15
              hover:bg-white/10
              transition
              text-center
            "
          >
            See Our Work
          </Link>
        </div>
      </div>

      {/* ── RIGHT MASCOT ───────────────────── */}
      <div className="w-full md:flex-1 flex justify-center md:justify-end z-10">

        <div
          className="
            relative

            w-[220px] h-[220px]
            xs:w-[260px] xs:h-[260px]
            sm:w-[320px] sm:h-[320px]
            md:w-[380px] md:h-[380px]
            lg:w-[460px] lg:h-[460px]
          "
        >

          {/* Ring 1 */}
          <div
            className="absolute inset-0 rounded-full border border-[#8A2BE2]/30"
            style={{ transform: "scale(1.12)" }}
          />

          {/* Ring 2 */}
          <div
            className="absolute inset-0 rounded-full border border-[#C51BE2]/10"
            style={{ transform: "scale(1.28)" }}
          />

          {/* Glow */}
          <div
            className="
              absolute inset-0
              rounded-full
              bg-[#8A2BE2]/20
              blur-3xl
              scale-90
            "
          />

          {/* Mascot */}
          <Image
            src={service.mascot}
            alt={`${service.title} mascot`}
            fill
            priority
            className="
              object-contain
              drop-shadow-[0_0_40px_rgba(138,43,226,0.45)]
              scale-105
              md:scale-110
            "
          />
        </div>
      </div>
    </div>
  </div>
</section>
      {/* ── WHAT WE DO ───────────────────────────────────────────────────── */}
      {/* ── WHAT WE DO ───────────────────────────────────────────────────── */}
<section className="py-16 sm:py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center gap-10 md:gap-12">

    {/* Image */}
    <div className="w-full md:flex-1">
      <div className="rounded-2xl overflow-hidden border border-[#8A2BE2]/20 relative">
        <Image
          src={service.whatWeDoImage}
          alt="What we do"
          width={620}
          height={420}
          className="w-full h-[260px] sm:h-[360px] md:h-auto object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0F0F0F]/60 to-transparent" />
      </div>
    </div>

    {/* Content */}
    <div className="w-full md:flex-1 text-center md:text-left">
      <SectionLabel text="What We Do" />

      <div className="flex justify-center md:justify-start">
        <GradientHeading>
          Crafting{" "}
          <span className="bg-gradient-to-r from-[#C51BE2] to-[#8A2BE2] bg-clip-text text-transparent">
            Excellence
          </span>{" "}
          in Every Project
        </GradientHeading>
      </div>

      <p className="text-gray-300 mt-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
        {service.whatWeDoText}
      </p>
    </div>
  </div>
</section>

      {/* ── OUR SERVICES (OFFERINGS) ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          {/* Section heading */}
          <div className="text-center mb-14 md:mb-20">
            <SectionLabel text="Our Services" />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What We{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
            {/* List */}
            <div className="w-full md:flex-1 space-y-6">
              {service.offerings.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Circle check icon */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-0.5">
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className="text-[#8A2BE2]"
                    />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-base sm:text-lg text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="w-full md:flex-1">
              <div className="rounded-2xl overflow-hidden border border-[#8A2BE2]/20 sticky top-24">
                <Image
                  src={service.offeringsImage}
                  alt="Our services"
                  width={620}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          {/* Heading */}
          <div className="text-center mb-14 md:mb-20">
            <SectionLabel text="Our Process" />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How We{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              A streamlined process built for clarity, speed, and results — so you always know what's happening and why.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {service.steps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#8A2BE2]/50 transition-all duration-300 group"
              >
                {/* Step number */}
                <span className="absolute top-4 right-4 text-xs font-bold text-[#8A2BE2]/60">
                  0{idx + 1}
                </span>

                {/* GIF */}
                <div className="w-16 h-16 rounded-xl overflow-hidden mb-5 ">
                  <img
                    src={step.gif}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3
                  className="font-bold text-base sm:text-lg text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORK IN ACTION ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="text-center mb-14">
            <SectionLabel text="Portfolio" />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Work{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                in Action
              </span>
            </h2>
          </div>

          {/* Project cards */}
          {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => {
              const imageUrl = getStrapiMediaUrl(project.coverImage?.url);

              return (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-[#8A2BE2]/50 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-[320px] overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3
                        className="text-xl font-bold text-white mb-3"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {project.title}
                      </h3>

                      <div className="inline-flex items-center gap-2 text-sm text-white/90 group-hover:text-[#C51BE2] transition-colors">
                        <span>Read More About Project</span>

                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
            /* Skeleton / empty state */
            <div className="flex flex-col items-center justify-center text-center py-20 px-6 border border-white/10 rounded-3xl bg-white/5">
              
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C51BE2]/20 to-[#8A2BE2]/20 border border-[#8A2BE2]/20 flex items-center justify-center mb-6">
                <span className="text-4xl">📁</span>
              </div>

              {/* Title */}
              <h3
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                No Projects at the Moment
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-4 max-w-md leading-relaxed text-sm md:text-base">
                We’re currently preparing new work for this category. 
                Check back soon to explore our latest creative projects and case studies.
              </p>

              {/* CTA */}
              <Link
                href="/contact"
                className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-[#C51BE2] to-[#8A2BE2] hover:opacity-90 transition text-sm md:text-base font-medium"
              >
                Start Your Project
              </Link>
            </div>
          )}

          {/* CTA to portfolio */}
          {projects.length > 0 && (
            <div className="mt-10 flex justify-center">
              <Link
                href={`/projects?tab=${service.portfolioTab}`}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#8A2BE2]/60 text-sm md:text-base hover:bg-[#8A2BE2]/20 transition"
              >
                Explore More Projects
                <ArrowRight size={16} className="text-[#8A2BE2]" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── WHY WORK WITH US ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="text-center mb-14">
            <SectionLabel text="Why Us" />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Why Work{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                With Us
              </span>
            </h2>
          </div>

          {/* 5 cards — 2 columns, wrapping (first row 2, second row 2, third row 1 centred) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {service.whyCards.map((card, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:border-[#8A2BE2]/40 transition-all duration-300 ${
                  // Centre the 5th card when it's alone in the last row
                  idx === 4 ? "sm:col-span-2 sm:max-w-md sm:mx-auto w-full" : ""
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#8A2BE2]/10 border border-[#8A2BE2]/20 flex items-center justify-center">
                  <HandPointing size={20} weight="duotone" className="text-[#8A2BE2]" />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="font-bold text-sm sm:text-base text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <CTA />

      <Footer />
    </main>
  );
}
