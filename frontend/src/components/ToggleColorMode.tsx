import React, { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { ColorModeContext } from "@/context/DarkModeContext";


export default function ToggleColorMode({ children }: { children: React.ReactNode }) {
  const storedMode = Cookies.get("colorMode") as "light" | "dark" | undefined;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultMode = storedMode || (prefersDark ? "dark" : "light");
  const [mode, setMode] = useState<"dark" | "light">(defaultMode);

  useEffect(() => {
    // Save to cookies
    Cookies.set("colorMode", mode, { expires: 365 });
    // Set <html class="dark"> for tailwind
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => setMode((m) => (m === "light" ? "dark" : "light")),
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      {children}
    </ColorModeContext.Provider>
  );
}
