"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1E1E1E] text-white">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* COMPANY INFO */}
          <div className="lg:col-span-2">

            {/* LOGO */}
            <Link href="/">
              <Image
                src="/imagic logo.png"
                alt="IMAGIC"
                width={160}
                height={60}
                className="object-contain"
              />
            </Link>

            {/* DESCRIPTION */}
            <p className="text-gray-400 mt-6 leading-relaxed max-w-xs text-sm">
              IMAGIC is a creative production and digital solutions agency
              specializing in video production, photography, design, and
              digital experiences that connect brands with audiences.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-6 space-y-3 text-sm text-gray-300">

              <p>
                13,2nd Lane,Nawala,Koswatta
              </p>

              <a
                href="tel:+94771234567"
                className="block hover:text-white transition"
              >
                +94 77 123 4567
              </a>

              <a
                href="mailto:hello@imagic.com"
                className="block hover:text-white transition"
              >
                imagiccreations@outlook.com
              </a>

            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8A2BE2] transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8A2BE2] transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8A2BE2] transition"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8A2BE2] transition"
              >
                <FaYoutube size={18} />
              </a>

            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Company
            </h3>

            <div className="flex flex-col gap-4 text-gray-400 text-sm">

              <Link
                href="/about"
                className="hover:text-white transition"
              >
                About Us
              </Link>

              <Link
                href="/projects"
                className="hover:text-white transition"
              >
                Projects
              </Link>

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Services
            </h3>

            <div className="flex flex-col gap-4 text-gray-400 text-sm">

              <Link href="/services/video-production" className="hover:text-white transition">
                Video Production
              </Link>

              <Link href="/services/live-production" className="hover:text-white transition">
                Live Production
              </Link>

              <Link href="/services/photography" className="hover:text-white transition">
                Photography
              </Link>

              <Link href="/services/editing" className="hover:text-white transition">
                Editing
              </Link>

              <Link href="/services/graphic-design" className="hover:text-white transition">
                Graphic Design
              </Link>

              <Link href="/services/ui-ux-design" className="hover:text-white transition">
                UI/UX Design
              </Link>

              <Link href="/services/web-development" className="hover:text-white transition">
                Web Development
              </Link>

            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Support
            </h3>

            <div className="flex flex-col gap-4 text-gray-400 text-sm">

              <Link
                href="/faq"
                className="hover:text-white transition"
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className="hover:text-white transition"
              >
                Contact Us
              </Link>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-16 pt-8">

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* COPYRIGHT */}
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {year} IMAGIC Creation. All rights reserved.
            </p>

            {/* LEGAL LINKS */}
            <div className="flex flex-wrap items-center justify-center text-sm text-gray-400">

             <Link
                href="/privacy-policy"
                className="hover:text-white transition"
                >
                Privacy Policy
                </Link>

                <span className="mx-3 text-white/20">•</span>

                <Link
                href="/terms-and-conditions"
                className="hover:text-white transition"
                >
                Terms & Conditions
                </Link>

                <span className="mx-3 text-white/20">•</span>

                <Link
                href="/sitemap"
                className="hover:text-white transition"
                >
                Sitemap
                </Link>

                <span className="mx-3 text-white/20">•</span>

                <Link
                href="/cookies"
                className="hover:text-white transition"
                >
                Cookies
                </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}