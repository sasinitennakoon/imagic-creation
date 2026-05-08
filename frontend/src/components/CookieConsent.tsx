"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { FaCookieBite } from "react-icons/fa";

const CONSENT_STORAGE_KEY = "imagic-cookie-consent";
const BANNER_DISMISSED_SESSION_KEY = "imagic-cookie-banner-dismissed";
const BANNER_CHANGED_EVENT = "imagic-cookie-banner-changed";

function subscribeToBanner(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(BANNER_CHANGED_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(BANNER_CHANGED_EVENT, callback);
  };
}

function getBannerSnapshot() {
  return window.sessionStorage.getItem(BANNER_DISMISSED_SESSION_KEY) === "true"
    ? "dismissed"
    : "open";
}

function getServerBannerSnapshot() {
  return "dismissed";
}

export default function CookieConsent() {
  const [isManuallyOpen, setIsManuallyOpen] = useState(false);
  const bannerState = useSyncExternalStore(
    subscribeToBanner,
    getBannerSnapshot,
    getServerBannerSnapshot
  );
  const isBannerOpen = isManuallyOpen || bannerState === "open";

  const closeBanner = (value?: "accepted" | "essential" | "declined") => {
    if (value) {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
    }

    window.sessionStorage.setItem(BANNER_DISMISSED_SESSION_KEY, "true");
    setIsManuallyOpen(false);
    window.dispatchEvent(new Event(BANNER_CHANGED_EVENT));
  };

  if (!isBannerOpen) {
    return (
      <button
        type="button"
        aria-label="Open cookie preferences"
        onClick={() => setIsManuallyOpen(true)}
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#8A2BE2]/40 bg-[#1E1E1E] text-[#FF0CE3] shadow-2xl shadow-black/40 transition hover:scale-105 hover:border-[#FF0CE3]/60 hover:bg-[#25152b]"
      >
        <FaCookieBite className="text-2xl" />
      </button>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#1E1E1E]/95 p-5 text-white shadow-2xl shadow-black/40 backdrop-blur-md">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#8A2BE2]/30 bg-[#8A2BE2]/15 text-[#FF0CE3]">
              <FaCookieBite className="text-xl" />
            </div>

            <div>
              <h2 className="text-base font-semibold">Cookie Preferences</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-400">
                We use essential cookies to keep the website working and optional
                cookies to improve your browsing experience. You can accept them
                or continue with essential cookies only.
              </p>

              <Link
                href="/cookies"
                onClick={() => closeBanner()}
                className="mt-2 inline-block text-sm font-medium text-[#FF0CE3] hover:text-white transition"
              >
                Read our Cookies Policy
              </Link>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:items-center">
            <button
              type="button"
              onClick={() => closeBanner("declined")}
              className="rounded-xl border border-red-400/20 px-5 py-3 text-sm font-medium text-gray-200 transition hover:bg-red-500/10 hover:text-white"
            >
              Decline All
            </button>

            <button
              type="button"
              onClick={() => closeBanner("essential")}
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/10"
            >
              Essential Only
            </button>

            <button
              type="button"
              onClick={() => closeBanner("accepted")}
              className="rounded-xl bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
