"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function TestimonialCard({ t }: { t: any }) {
  const [open, setOpen] = useState(false);
  const LIMIT = 200;
  const isLong = t.quote && t.quote.length > LIMIT;
  const truncated = isLong ? t.quote.slice(0, LIMIT).trimEnd() : t.quote;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Card */}
      <div
        className="rounded-2xl p-6"
        style={{
          background: "linear-gradient(135deg,rgba(138,43,226,.10) 0%,rgba(0,0,0,0) 100%)",
          border: "1px solid rgba(138,43,226,.25)",
        }}
      >
        <span
          className="block text-5xl font-serif leading-none mb-2 select-none"
          style={{ color: "#8A2BE2" }}
          aria-hidden
        >
          "
        </span>
        {t.quote && (
          <p className="text-sm md:text-base font-medium text-zinc-100 leading-relaxed italic">
            {isLong ? (
              <>
                {truncated}
                <span className="text-zinc-500">…</span>{" "}
                <button
                  onClick={() => setOpen(true)}
                  className="text-[#c084fc] hover:text-[#a855f7] text-sm font-semibold not-italic underline underline-offset-2 transition-colors"
                >
                  Read more
                </button>
              </>
            ) : (
              t.quote
            )}
          </p>
        )}
        {(t.authorName || t.authorRole) && (
          <footer className="mt-5 flex items-center gap-3">
            <div
              className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold shrink-0"
              style={{ background: "rgba(138,43,226,0.25)", color: "#c084fc" }}
            >
              {t.authorName?.[0]?.toUpperCase() ?? "?"}
            </div>
            <div>
              {t.authorName && <p className="font-semibold text-white text-sm">{t.authorName}</p>}
              {t.authorRole && <p className="text-xs text-zinc-400 mt-0.5">{t.authorRole}</p>}
            </div>
          </footer>
        )}
      </div>

      {/* Modal */}
      {open && (
        <>
          <style>{`
            .testimonial-modal::-webkit-scrollbar {
              width: 4px;
            }
            .testimonial-modal::-webkit-scrollbar-track {
              background: transparent;
            }
            .testimonial-modal::-webkit-scrollbar-thumb {
              background: rgba(138, 43, 226, 0.5);
              border-radius: 999px;
            }
            .testimonial-modal::-webkit-scrollbar-thumb:hover {
              background: rgba(138, 43, 226, 0.85);
            }
          `}</style>

          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
            style={{ background: "rgba(0,0,0,0.80)", backdropFilter: "blur(8px)" }}
            onClick={() => setOpen(false)}
          >
            <div
              className="testimonial-modal relative w-full rounded-2xl p-6 sm:p-8 md:p-10"
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(138,43,226,.35)",
                maxWidth: "min(760px, 95vw)",
                maxHeight: "90vh",
                overflowY: "auto",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(138,43,226,0.5) transparent",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full border border-white/10 hover:border-[#8A2BE2] text-zinc-400 hover:text-[#8A2BE2] transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Quote mark */}
              <span
                className="block text-6xl sm:text-7xl font-serif leading-none mb-3 select-none"
                style={{ color: "#8A2BE2" }}
                aria-hidden
              >
                "
              </span>

              {/* Full quote */}
              <p className="text-base sm:text-lg md:text-xl font-medium text-zinc-100 leading-relaxed italic pr-2">
                {t.quote}
              </p>

              {/* Author */}
              {(t.authorName || t.authorRole) && (
                <footer className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-full text-sm font-bold shrink-0"
                    style={{ background: "rgba(138,43,226,0.25)", color: "#c084fc" }}
                  >
                    {t.authorName?.[0]?.toUpperCase() ?? "?"}
                  </div>
                  <div>
                    {t.authorName && <p className="font-semibold text-white text-sm">{t.authorName}</p>}
                    {t.authorRole && <p className="text-xs text-zinc-400 mt-0.5">{t.authorRole}</p>}
                  </div>
                </footer>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}