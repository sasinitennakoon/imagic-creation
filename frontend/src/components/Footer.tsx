"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1E1E1E] text-white overflow-hidden">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12">
          
          {/* COMPANY INFO */}
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            
            {/* LOGO */}
            <Link href="/" className="inline-block">
              <Image
                src="/imagic logo.png"
                alt="IMAGIC"
                width={160}
                height={60}
                className="object-contain w-[140px] sm:w-[160px] h-auto"
              />
            </Link>

            {/* DESCRIPTION */}
            <p className="text-gray-400 mt-5 leading-relaxed text-sm max-w-sm mx-auto sm:mx-0">
              IMAGIC is a creative production and digital solutions agency
              specializing in video production, photography, design, and
              digital experiences that connect brands with audiences.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <p>13,2nd Lane,Nawala,Koswatta</p>

              <a
                href="tel:+94706700770"
                className="block hover:text-white transition"
              >
                +94 70 670 0770
              </a>

              <a
                href="mailto:hello@imagic.com"
                className="block hover:text-white transition break-all"
              >
                imagiccreations@outlook.com
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center justify-center sm:justify-start gap-4 mt-8">
              <a
                href="https://www.facebook.com/share/1HwdWvNbJU/?mibextid=wwXIfr"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8A2BE2] transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.tiktok.com/@imagic.creation?_r=1&_t=ZS-96GFpyQ947u"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8A2BE2] transition"
              >
                <FaTiktok size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/imagic-creation/"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8A2BE2] transition"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-5">
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
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-5">
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

              <Link href="/services/web-design" className="hover:text-white transition">
                Web Design
              </Link>

              <Link href="/services/web-development" className="hover:text-white transition">
                Web Development
              </Link>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-5">
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
        <div className="border-t border-white/10 mt-14 pt-8">
          
          {/* BOTTOM */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
            
            {/* COPYRIGHT */}
            <p className="text-sm text-gray-400 text-center lg:text-left">
              © {year} IMAGIC Creation. All rights reserved.
            </p>

            {/* LEGAL LINKS */}
            {/* LEGAL LINKS */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 text-sm text-gray-400 text-center">
  
  <Link
    href="/privacy-policy"
    className="hover:text-white transition"
  >
    Privacy Policy
  </Link>

  <span className="mx-3 text-white/20 hidden sm:block">•</span>

  <Link
    href="/terms-and-conditions"
    className="hover:text-white transition"
  >
    Terms & Conditions
  </Link>

  <span className="mx-3 text-white/20 hidden sm:block">•</span>

  <Link
    href="/sitemap"
    className="hover:text-white transition"
  >
    Sitemap
  </Link>

  <span className="mx-3 text-white/20 hidden sm:block">•</span>

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