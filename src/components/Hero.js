"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Counter from "./Counter";
import HeroProjects from "./HeroProjects";

export default function Hero({ site, projects }) {
  const [text, setText] = useState("");
  useEffect(() => {
    const roles = site.roles;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let r = 0, c = 0, del = false, id;
    const step = () => {
      if (reduce) { setText(roles[0]); return; }
      const full = roles[r];
      c += del ? -1 : 1;
      setText(full.slice(0, c));
      let wait = del ? 40 : 80;
      if (!del && c === full.length) { del = true; wait = 1400; }
      else if (del && c === 0) { del = false; r = (r + 1) % roles.length; wait = 300; }
      id = setTimeout(step, wait);
    };
    id = setTimeout(step, 0);
    return () => clearTimeout(id);
  }, [site.roles]);

  const words = site.name.split(" ");
  return (
    <section id="home" className="relative isolate w-full overflow-hidden">
      <span className="watermark" aria-hidden="true">{site.watermark}</span>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-6 inline-flex items-center gap-3 text-accent text-sm">
            <span className="relative flex items-center justify-center h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.status}
          </p>
          <h1 aria-label={site.name} className="name text-[clamp(2.75rem,7.5vw,5.75rem)] font-extrabold leading-[.95] tracking-tighter">
            {words.map((w, wi) => {
              const start = words.slice(0, wi).join("").length;
              return (
                <span key={wi}>
                  {wi > 0 && " "}
                  <span className="inline-block whitespace-nowrap" aria-hidden="true">
                    {[...w].map((ch, i) => <span key={i} style={{ "--i": start + i }}>{ch}</span>)}
                  </span>
                </span>
              );
            })}
          </h1>
          <p className="mt-3 min-h-9 text-2xl font-semibold text-accent">
            <span className="sr-only">{site.role}</span>
            <span aria-hidden="true">{text}<i className="caret" /></span>
          </p>
          <p className="mb-8 mt-4 max-w-xl text-xl text-muted">{site.intro}</p>
          <div className="flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <Link className="btn" href="/resume" target="_blank" rel="noopener noreferrer">View Resume</Link>
          </div>
          <dl className="mt-14 flex flex-wrap gap-10">
            {site.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="text-3xl font-extrabold"><Counter value={s.value} /></dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroProjects projects={projects} />
      </div>
    </section>
  );
}
