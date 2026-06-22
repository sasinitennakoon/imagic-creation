import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiesPolicyPage() {
  return (
    <>
      <Navbar />

      <section className="w-full min-h-screen bg-[#0F0F0F] text-white py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
          
          {/* HEADER */}
          <div className="text-center">
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Cookies{" "}
              <span className="bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p
              className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              This Cookies Policy explains how Imagic Creation uses cookies and
              similar technologies on our website.
            </p>
          </div>

          {/* CONTENT */}
          <div
            className="mt-20 space-y-14"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            
            {/* INTRODUCTION */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                What Are Cookies?
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Cookies are small text files stored on your device when you
                visit a website. They help websites function properly, improve
                user experience, remember preferences, and provide analytical
                insights about website usage.
              </p>
            </div>

            {/* HOW WE USE */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                How We Use Cookies
              </h2>

              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  Imagic Creation uses cookies to:
                </p>

                <ul className="space-y-3 list-disc pl-6">
                  <li>Ensure the website functions correctly</li>
                  <li>Remember user preferences and settings</li>
                  <li>Analyze website traffic and performance</li>
                  <li>Improve overall browsing experience</li>
                  <li>Enhance website security and stability</li>
                </ul>
              </div>
            </div>

            {/* TYPES */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Types of Cookies We Use
              </h2>

              <div className="space-y-8 text-gray-400 leading-relaxed">
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Essential Cookies
                  </h3>

                  <p>
                    These cookies are necessary for the website to function
                    properly and cannot be disabled.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Analytics Cookies
                  </h3>

                  <p>
                    These cookies help us understand how visitors interact with
                    our website and improve user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Preference Cookies
                  </h3>

                  <p>
                    These cookies remember your preferences such as theme,
                    language, or previously entered details.
                  </p>
                </div>
              </div>
            </div>

            {/* THIRD PARTY */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Third-Party Cookies
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Some third-party services integrated into our website, such as
                Google Maps, analytics providers, or embedded media platforms,
                may also use cookies. These third-party cookies are governed by
                their own privacy and cookies policies.
              </p>
            </div>

            {/* MANAGE */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Managing Cookies
              </h2>

              <p className="text-gray-400 leading-relaxed">
                You can manage or disable cookies through your browser settings.
                Please note that disabling certain cookies may affect website
                functionality and user experience.
              </p>
            </div>

            {/* POLICY UPDATES */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Updates to This Policy
              </h2>

              <p className="text-gray-400 leading-relaxed">
                We may update this Cookies Policy from time to time to reflect
                changes in technology, legal requirements, or website features.
                Any updates will be posted on this page.
              </p>
            </div>

            {/* CONTACT */}
            <div className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-semibold mb-5">
                Contact Us
              </h2>

              <p className="text-gray-400 leading-relaxed">
                If you have any questions regarding our use of cookies, please
                contact Imagic Creation through our official contact channels.
              </p>

              <div className="mt-6 space-y-2 text-gray-300">
                <p>Email: imagiccreations@outlook.com</p>
                <p>Phone: +94 70 670 0770</p>
                <p>Location: 13,2nd Lane,Nawala,Koswatta, Sri Lanka</p>
              </div>
            </div>

            {/* LAST UPDATED */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-500">
                Last Updated — June 2026
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}