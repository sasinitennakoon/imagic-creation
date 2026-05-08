"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type A11yState = {
  font: number;
  spacing: boolean;
  contrast: boolean;
  negative: boolean;
  grayscale: boolean;
  focus: boolean;
  links: boolean;
  motion: boolean;
  calm: boolean;
};

type A11yContextValue = {
  state: A11yState;
  setState: Dispatch<SetStateAction<A11yState>>;
};

export const defaultA11yState: A11yState = {
  font: 100,
  spacing: false,
  contrast: false,
  negative: false,
  grayscale: false,
  focus: false,
  links: false,
  motion: false,
  calm: false,
};

const A11yContext = createContext<A11yContextValue | null>(null);

function getInitialA11yState() {
  if (typeof window === "undefined") {
    return defaultA11yState;
  }

  const saved = window.localStorage.getItem("a11y");

  if (!saved) {
    return defaultA11yState;
  }

  try {
    return { ...defaultA11yState, ...JSON.parse(saved) };
  } catch {
    return defaultA11yState;
  }
}

export function A11yProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<A11yState>(getInitialA11yState);

  useEffect(() => {
    const root = document.documentElement;

    // FONT SCALING (WCAG zoom support)
    root.style.fontSize = `${state.font}%`;

    document.body.classList.toggle("a11y-spacing", state.spacing);
    document.body.classList.toggle("a11y-contrast", state.contrast);
    document.body.classList.toggle("a11y-negative", state.negative);
    document.body.classList.toggle("a11y-gray", state.grayscale);
    document.body.classList.toggle("a11y-focus", state.focus);
    document.body.classList.toggle("a11y-links", state.links);
    document.body.classList.toggle("a11y-motion", state.motion);
    document.body.classList.toggle("a11y-calm", state.calm);

    window.localStorage.setItem("a11y", JSON.stringify(state));
  }, [state]);

  return (
    <A11yContext.Provider value={{ state, setState }}>
      {children}
    </A11yContext.Provider>
  );
}

export function useA11y() {
  const context = useContext(A11yContext);

  if (!context) {
    throw new Error("useA11y must be used within A11yProvider");
  }

  return context;
}
