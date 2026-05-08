import {
  FaChevronDown,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";   

export default function ContactPage() {
  return (
    <section className="w-full min-h-screen bg-[#0F0F0F] text-white pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let’s{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Create
            </span>{" "}
            Something{" "}
            <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
              Great
            </span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl text-sm md:text-base leading-relaxed">
            Have a project in mind? Let’s discuss your ideas and turn them into
            impactful digital experiences and creative productions.
          </p>
        </div>

        {/* CONTACT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          
          {/* LEFT CARD - FORM */}
          <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              
              {/* FULL NAME */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-[#0F0F0F] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#8A2BE2] transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-[#0F0F0F] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#8A2BE2] transition"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full bg-[#0F0F0F] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#8A2BE2] transition"
                />
              </div>

              {/* SERVICE */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Service Needed
                </label>

                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full appearance-none bg-[#0F0F0F] border border-white/10 rounded-xl px-4 py-4 pr-12 text-white outline-none focus:border-[#8A2BE2] transition"
                  >
                    <option value="" disabled className="bg-[#1E1E1E] text-gray-400">
                      Select a service
                    </option>
                    <option className="bg-[#1E1E1E] text-white">Photography</option>
                    <option className="bg-[#1E1E1E] text-white">Video Production</option>
                    <option className="bg-[#1E1E1E] text-white">Live Production</option>
                    <option className="bg-[#1E1E1E] text-white">Editing</option>
                    <option className="bg-[#1E1E1E] text-white">Graphic Design</option>
                    <option className="bg-[#1E1E1E] text-white">Web Design</option>
                    <option className="bg-[#1E1E1E] text-white">Web Development</option>
                  </select>

                  <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400" />
                </div>
              </div>

              {/* PROJECT DETAILS */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">
                  Project Details
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#0F0F0F] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#8A2BE2] transition resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] text-white font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col">
            
            <h2 className="text-2xl font-semibold mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">
              
              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8A2BE2]/15 border border-[#8A2BE2]/30 text-[#FF0CE3]">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Email</p>
                  <p className="text-lg">hello@imagiccreation.com</p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8A2BE2]/15 border border-[#8A2BE2]/30 text-[#FF0CE3]">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Phone Number</p>
                  <p className="text-lg">+94 77 123 4567</p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8A2BE2]/15 border border-[#8A2BE2]/30 text-[#FF0CE3]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Location</p>
                  <p className="text-lg">
                    Kandy, Sri Lanka
                  </p>
                </div>
              </div>

              {/* BUSINESS HOURS */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8A2BE2]/15 border border-[#8A2BE2]/30 text-[#FF0CE3]">
                  <FaClock />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">
                    Business Hours
                  </p>

                  <p className="text-lg">
                    Monday - Friday
                  </p>

                  <p className="text-gray-400 mt-1">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* QUICK RESPONSE */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-5">
                Quick Response
              </h3>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#8A2BE2] mt-1">•</span>
                  <span>
                    We typically respond to all inquiries within 24 hours during business days.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#8A2BE2] mt-1">•</span>
                  <span>
                    For urgent requests, please call us directly.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#8A2BE2] mt-1">•</span>
                  <span>
                    We keep you updated at every stage, ensuring a smooth and transparent collaboration.
                  </span>
                </li>
              </ul>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              className="mt-auto w-full bg-[#25D366] hover:bg-[#20ba5a] transition-all duration-300 text-white rounded-xl py-4 flex items-center justify-center gap-3 font-medium"
            >
              <FaWhatsapp className="text-2xl" />
              Chat with WhatsApp
            </a>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <div className="mt-12 mb-20 md:mb-24">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8989397915257!2d79.89507187498435!3d6.9026878930966475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf605fe9c6715711%3A0x7ee8763a5016449d!2sImagic%20Creation!5e0!3m2!1sen!2slk!4v1778231881236!5m2!1sen!2slk"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>

      </div>
      <Footer />  
    </section>
    
  );
}
