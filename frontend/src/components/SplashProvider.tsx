"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowSplash(true);

      sessionStorage.setItem("hasVisited", "true");

      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3200);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      {children}
    </>
  );
}