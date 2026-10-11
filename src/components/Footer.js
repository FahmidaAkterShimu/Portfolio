"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const quick = [["/#about", "About"], ["/#services", "Services"], ["/#projects", "Projects"], ["/contact", "Contact"]];

export default function Footer({ site }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const set = () => document.documentElement.style.setProperty("--footer-h", `${el.offsetHeight}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const [first, ...rest] = site.name.split(" ");
  const col = "mb-3 font-semibold text-white";
  const lnk = "block py-0.5 text-sm text-[#93a59b] transition-colors hover:text-[#4cc79a]";
  return (
    <footer ref={ref} className="fixed inset-x-0 bottom-0 z-0 bg-[#050a08] text-[#e8efe9]">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <p className="text-[clamp(2.5rem,9vw,7rem)] font-extrabold uppercase leading-none tracking-tighter">
          {first} <span className="text-[#4cc79a]">{rest.join(" ")}</span>
        </p>
        <a className="mt-3 inline-block text-2xl text-[#cfd9d3] hover:text-[#4cc79a] sm:text-3xl" href={`mailto:${site.email}`}>{site.email}</a>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div>
            <p className={col}>Get in Touch</p>
            <p className="text-sm text-[#93a59b]">{site.location}</p>
            <a className={lnk} href={'/contact'}>Contact me ↗</a>
          </div>
          <div>
            <p className={col}>Quick Links</p>
            {quick.map(([href, label]) => <Link key={href} href={href} className={lnk}>{label}</Link>)}
          </div>
          <div>
            <p className={col}>Social</p>
            <a className={lnk} href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className={lnk} href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <p className="mt-12 text-xs text-[#93a59b]">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
