import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Projects", href: "/projects" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },

  {
    title: "Services",
    links: [
      { name: "Photography", href: "/services/photography" },
      { name: "Video Production", href: "/services/video-production" },
      { name: "Live Production", href: "/services/live-production" },
      { name: "Editing", href: "/services/editing" },
      { name: "Graphic Design", href: "/services/graphic-design" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Web Development", href: "/services/web-development" },
    ],
  },

  {
    title: "Projects & Portfolio",
    links: [
      { name: "Featured Projects", href: "/projects" },
      { name: "Photography Projects", href: "/projects" },
      { name: "Production Projects", href: "/projects" },
      { name: "Design Projects", href: "/projects" },
      { name: "Development Projects", href: "/projects" },
    ],
  },

  {
    title: "Support & Information",
    links: [
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "Cookies Policy", href: "/cookies-policy" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  },

  {
    title: "Connect With Us",
    links: [
      { name: "WhatsApp", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "YouTube", href: "#" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />

      <section className="w-full min-h-screen bg-[#0F0F0F] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          
          {/* HEADER */}
          <div className="text-center">
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Site{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                Map
              </span>
            </h1>

            <p
              className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Easily navigate through all pages and sections available on the
              Imagic Creation website.
            </p>
          </div>

          {/* SITEMAP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {sitemapSections.map((section, index) => (
              <div
                key={index}
                className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8"
              >
                
                {/* SECTION TITLE */}
                <h2
                  className="text-2xl font-semibold mb-8"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {section.title}
                </h2>

                {/* LINKS */}
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="group flex items-center justify-between border-b border-white/5 pb-4 text-gray-300 hover:text-white transition"
                    >
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {link.name}
                      </span>

                      <span className="transform transition group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* EXTRA NOTE */}
          <div className="mt-20 text-center">
            <p
              className="text-gray-500 text-sm"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Can’t find what you’re looking for? Visit our contact page and
              reach out to our team.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}