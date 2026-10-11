"use client";
import { useEffect, useState } from "react";

export default function Loader({ name }) {
  const [p, setP] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const fast = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = setInterval(() => setP((v) => Math.min(v + (fast ? 50 : 2 + Math.random() * 5), 100)), 60);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (p < 100) return;
    const t = setTimeout(() => setGone(true), 600);
    return () => clearTimeout(t);
  }, [p]);

  if (gone) return null;
  const pct = Math.floor(p);
  return (
    <div role="status" aria-label="Loading" data-done={p >= 100} className="loader fixed inset-0 z-100 grid place-items-center overflow-hidden bg-bg transition-opacity duration-500 data-[done=true]:pointer-events-none data-[done=true]:opacity-0">
      <span aria-hidden="true" className="absolute select-none text-[clamp(8rem,32vw,26rem)] font-black leading-none text-ink/5">{pct}%</span>
      <div className="relative text-center">
        <p className="text-[clamp(2.5rem,9vw,5rem)] font-extrabold uppercase leading-none tracking-tighter">{name}</p>
        <p className="mt-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.4em] text-muted">
          <span className="dot h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />System initializing
        </p>
        <div className="mx-auto mt-4 h-0.5 w-72 max-w-full bg-line">
          <div className="h-full bg-accent transition-[width] duration-100" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}
