"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/utils/cn";

const links = [["/#about", "About"], ["/#services", "Services"], ["/#projects", "Projects"], ["/contact", "Contact"]];
const linkCls = "block rounded-full px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-accent/10 hover:text-accent";

export default function Navbar({ name, short }) {
  const [open, setOpen] = useState(false);
  const bar = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      bar.current.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lineCls = "absolute h-0.5 rounded-full transition-all duration-300";
  return (
    <>
      <div ref={bar} className="fixed left-0 top-0 z-60 h-0.75 w-full origin-left scale-x-0 bg-accent" aria-hidden="true" />
      <header className="pointer-events-none sticky top-0 z-50 px-4 pt-4">
        <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-full border border-line bg-panel/90 py-2 pl-2 pr-3 shadow-lg backdrop-blur">
          <Link href="/" className="flex items-center gap-3 font-bold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent font-extrabold text-on-accent">{short}</span>
            <span className="hidden sm:block">{name}</span>
          </Link>

          <div className="relative flex items-center gap-1">
            <div className={cn("hidden transition-[grid-template-columns] duration-500 ease-in-out md:grid", open ? "grid-cols-[1fr]" : "grid-cols-[0fr]")}>
              <nav inert={!open} aria-label="Main" className="min-w-0 overflow-hidden">
                <ul className="flex justify-end">
                  {links.map(([href, label], i) => (
                    <li
                      key={href}
                      className={cn("shrink-0 transition-all duration-500 ease-out", open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0")}
                      style={{ transitionDelay: open ? `${(links.length - 1 - i) * 70}ms` : "0ms" }}
                    >
                      <Link href={href} className={linkCls}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors hover:bg-ink/5"
            >
              <span className="relative block h-5 w-5" aria-hidden="true">
                <i className={cn(lineCls, "bg-ink", open ? "left-0 top-2.25 w-5 rotate-45" : "left-0 top-1.25 w-5")} />
                <i className={cn(lineCls, "bg-accent", open ? "left-0 top-2.25 w-5 -rotate-45" : "left-2 top-3 w-3")} />
              </span>
            </button>
            <ThemeToggle />

            <nav
              id="mobile-menu"
              inert={!open}
              aria-label="Main menu"
              className={cn(
                "absolute right-0 top-full mt-4 w-56 origin-top-right rounded-2xl border border-line bg-panel p-2 shadow-xl transition-all duration-200 md:hidden",
                open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
              )}
            >
              {links.map(([href, label]) => (
                <Link key={href} href={href} className="flex items-center justify-between rounded-xl px-3 py-2.5 font-medium transition-colors hover:bg-accent/10 hover:text-accent">
                  {label}<span aria-hidden="true">↗</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
