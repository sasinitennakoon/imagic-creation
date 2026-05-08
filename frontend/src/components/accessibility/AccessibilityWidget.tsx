"use client";

import { useState } from "react";
import {
  Accessibility,
  Type,
  Contrast,
  Eye,
  MousePointer2,
  RotateCcw,
  X,
} from "lucide-react";
import {
  defaultA11yState,
  useA11y,
} from "@/components/accessibility/A11yProvider";
import type { ReactNode } from "react";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const { state, setState } = useA11y();

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        type="button"
        aria-label="Open accessibility settings"
        onClick={() => setOpen(true)}
        className="a11y-widget fixed right-0 top-[50dvh] z-[70] flex -translate-y-1/2 items-center gap-2 rounded-l-2xl border border-r-0 border-white/10 bg-[#1E1E1E]/95 px-3 py-4 text-white shadow-2xl shadow-black/30 backdrop-blur-md transition hover:border-[#8A2BE2]/60 hover:bg-[#25152b]"
      >
        <Accessibility className="h-5 w-5 text-[#FF0CE3]" />
        <span className="hidden text-xs font-medium uppercase tracking-[0.18em] [writing-mode:vertical-rl] sm:block">
          Access
        </span>
      </button>

      {/* PANEL */}
      {open && (
        <div className="a11y-widget pointer-events-none fixed inset-0 z-[80] flex justify-end">

          <div className="pointer-events-auto h-dvh w-full max-w-[380px] overflow-y-auto border-l border-white/10 bg-[#0F0F0F] shadow-2xl shadow-black/50 sm:max-w-md">

            {/* HEADER */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0F0F0F]/95 p-5 backdrop-blur-md">
              <div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-[#C51BE2] via-[#8A2BE2] to-[#FF0CE3] bg-clip-text text-transparent">
                  Accessibility
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  WCAG 2.1 AA Experience Settings
                </p>
              </div>

              <button
                type="button"
                aria-label="Close accessibility settings"
                onClick={() => setOpen(false)}
              >
                <X />
              </button>
            </div>

            {/* CONTENT */}
            <div className="space-y-6 p-5">

              {/* ===== TEXT ===== */}
              <Section title="Text & Typography" icon={<Type />}>
                <Option
                  label="Small"
                  active={state.font === 90}
                  onClick={() => setState({ ...state, font: 90 })}
                />
                <Option
                  label="Default"
                  active={state.font === 100}
                  onClick={() => setState({ ...state, font: 100 })}
                />
                <Option
                  label="Large"
                  active={state.font === 120}
                  onClick={() => setState({ ...state, font: 120 })}
                />
              </Section>

              {/* ===== COLOR ===== */}
              <Section title="Color & Contrast" icon={<Contrast />}>
                <Option
                  label="High Contrast"
                  active={state.contrast}
                  onClick={() =>
                    setState((current) => ({
                      ...current,
                      contrast: !current.contrast,
                    }))
                  }
                />
                <Option
                  label="Negative Contrast"
                  active={state.negative}
                  onClick={() =>
                    setState((current) => ({
                      ...current,
                      negative: !current.negative,
                    }))
                  }
                />
                <Option
                  label="Grayscale Mode"
                  active={state.grayscale}
                  onClick={() =>
                    setState((current) => ({
                      ...current,
                      grayscale: !current.grayscale,
                    }))
                  }
                />
              </Section>

              {/* ===== HIGHLIGHT ===== */}
              <Section title="Content Highlighting" icon={<MousePointer2 />}>
                <Option
                  label="Enhanced Focus"
                  active={state.focus}
                  onClick={() =>
                    setState((current) => ({
                      ...current,
                      focus: !current.focus,
                    }))
                  }
                />
                <Option
                  label="Link Visibility Boost"
                  active={state.links}
                  onClick={() =>
                    setState((current) => ({
                      ...current,
                      links: !current.links,
                    }))
                  }
                />
              </Section>

              {/* ===== VISUAL ===== */}
              <Section title="Visual & Motion" icon={<Eye />}>
                <Option
                  label="Reduce Motion"
                  active={state.motion}
                  onClick={() =>
                    setState((current) => ({
                      ...current,
                      motion: !current.motion,
                    }))
                  }
                />
                <Option
                  label="Calm Visual Mode"
                  active={state.calm}
                  onClick={() =>
                    setState((current) => ({
                      ...current,
                      calm: !current.calm,
                    }))
                  }
                />
              </Section>

              <button
                type="button"
                onClick={() => setState(defaultA11yState)}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-gray-200 transition hover:border-[#8A2BE2]/60 hover:bg-white/5 hover:text-white"
              >
                <RotateCcw className="h-4 w-4" />
                Reset Accessibility Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ===== SECTION ===== */
type SectionProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
};

function Section({ title, icon, children }: SectionProps) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-gray-300">
        <span className="text-[#C51BE2]">{icon}</span>
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

/* ===== OPTION ===== */
type OptionProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function Option({ label, active, onClick }: OptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
        active
          ? "border-[#8A2BE2] bg-white/5 text-white"
          : "border-white/10 text-gray-400 hover:text-white hover:border-white/20"
      }`}
    >
      {label}
    </button>
  );
}
