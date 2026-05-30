"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState<boolean | null>(null);

useEffect(() => {
  const hasVisited = sessionStorage.getItem("hasVisited");

  if (!hasVisited) {
    setShowSplash(true);
    sessionStorage.setItem("hasVisited", "true");
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3200);
    return () => clearTimeout(timer);
  } else {
    setShowSplash(false);
  }
}, []);

return (
  <>
    {showSplash === null ? null : showSplash ? <SplashScreen /> : null}
    {showSplash === false && children}
  </>
);
}