"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // FIX: safe mount flag (prevents hydration mismatch)
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  // FIRST LOAD ANIMATION CONTROL
  useEffect(() => {
    setMounted(true);
  }, []);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={mounted ? { y: -80, opacity: 0 } : false}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/imagic logo.png"
              alt="Imagic Creation Logo"
              className="w-32 sm:w-36 md:w-40"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item, i) => {
              const active = pathname === item.href;

              return (
                <Link key={i} href={item.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`relative px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      active
                        ? "text-white border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(197,27,226,0.18)]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {/* ACTIVE GLOW */}
                    {active && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C51BE2]/20 via-[#8A2BE2]/20 to-[#FF0CE3]/20 blur-lg" />
                    )}

                    <span className="relative z-10">{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* CTA */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex px-5 py-2 rounded-full bg-[#8A2BE2] text-white text-sm font-medium shadow-lg hover:opacity-90 transition"
            >
              Get a Quote
            </motion.a>

            {/* MOBILE BUTTON */}
            <button
              aria-label="Toggle Menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[84px] left-0 w-full z-40 bg-[#0F0F0F]/95 backdrop-blur-2xl border-t border-white/10 md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">

              {navItems.map((item, i) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-5 py-4 rounded-2xl text-sm transition-all ${
                      active
                        ? "bg-white/10 border border-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* CTA */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center px-5 py-4 rounded-2xl text-sm font-medium text-white bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3]"
              >
                Get a Quote
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}