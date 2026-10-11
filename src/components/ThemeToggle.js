"use client";
import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeToggle() {
  const { toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5 hover:text-accent"
    >
      {/* Sun: dark mode-e dekhay. Moon: light mode-e dekhay. */}
      <svg className="hidden dark:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg className="dark:hidden" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
