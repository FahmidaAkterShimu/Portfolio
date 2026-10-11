"use client";
import { createContext, useContext } from "react";

const ThemeContext = createContext({ toggle: () => {} });
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  };
  return <ThemeContext.Provider value={{ toggle }}>{children}</ThemeContext.Provider>;
}
